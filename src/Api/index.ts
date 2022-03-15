import express from 'express';
const apiroute=express.Router();
apiroute.get('/',(req:express.Request,res:express.Response)=>{
    res.send("to access the api data you need enter images")
})
export default apiroute;
