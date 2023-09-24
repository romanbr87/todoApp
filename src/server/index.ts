import express from "express";
import {api} from "./api";
import session from "cookie-session";
import { auth } from "./auth";
require('dotenv').config();

const app=express();
app.use(express.json()); //json parsing/casting to body to json template

// app.use(session({
//     secret:process.env["SESSION_SECRET"] ||"secret",
// })
// );

app.use(auth);//call to sign in ans sign out functions,authentication
app.use(api);

app.get("/api/hi",(req,res)=>res.send("Hello Maor"));

app.use(express.static(process.cwd()+"/dist")); //for production 

app.listen(process.env["PORT"] || 8080,()=>console.log("server started"));
