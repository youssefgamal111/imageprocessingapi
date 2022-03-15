import express from 'express';
import valid from './validation'
import * as path from 'path';
const imageroute=express.Router();

imageroute.get('/',valid,(req:express.Request, res:express.Response) => {
    
    
        
    res.sendFile(`${req.query.filename},${req.query.width},${req.query.height}.jpg`
,{ root:path.resolve('photos')})

  console.log(path.resolve('photos'));
    
    
   });
   export default imageroute;