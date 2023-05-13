import express from "express";
import apikey from './apikey.json' assert { type: "json" };
const app = express()
const api = apikey
const port=3000
console.log("nice!!!!!!!")
app.get('/', (req, res) => {
    res.send(api)
})
app.listen(port,()=>{
    console.log("app is running!")
})