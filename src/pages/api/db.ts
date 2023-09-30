import mongoose from 'mongoose';

mongoose.set("bufferCommands", true);
mongoose.set("strictQuery", true);

mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  autoIndex: true,
  //promiseLibrary: global.Promise,
  useUnifiedTopology: true,
};

const connectToDatabase1 = async (): Promise<Mongoose> => {
  try {
    const connection: Mongoose = await mongoose.connect(
      dbConnectionString,
      options
    );
    console.log(
      "\ndatabase connected. Ready state:",
      connection.connection.readyState
    );
    return connection;
  } catch (error) {
    console.log("CONNECTION ERROR:", error);
    throw error;
  }
};

const db1: Connection = mongoose.connection;
