import { remultExpress } from "remult/remult-express";
import { Task } from "../shared/task";
import { TaskController } from "../shared/TasksControoler";
import { MongoClient } from "mongodb";
import { MongoDataProvider } from "remult/remult-mongo";

export const api = remultExpress({
  entities: [Task],
  controllers: [TaskController],
  getUser: (req) => req.session!["user"], //Enter users profile,sign-in
  dataProvider: async () => {
    try {
      console.log(process.env["MONGO_URL"]);c
      const client = new MongoClient(process.env["MONGO_URL"]!);
      await client.connect();
      console.log("DB Connection successful");
      return new MongoDataProvider(client.db("test"), client);
    } catch (error) {
      console.log("Cant connect to mongo");
    }
  },
});

//console.log(process.env["MONGO_URL"])
