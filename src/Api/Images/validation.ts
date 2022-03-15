import express from 'express';
import { promises as fspromises } from 'fs';
import { resize } from '../../utilites/resize';
const valid=(req:express.Request,res:express.Response,next:Function)=>{
    
   let width:number=parseInt(req.query.width as string);
    let height:number=parseInt(req.query.height as string);
    let filename:string=req.query.filename as string;
   if(isNaN(width)||isNaN(height)||filename===undefined||(width||height)<0){
    res.send("you must enter three valid argument width,height and filename ,"); 
    return;
    }
    
  findIfFileExist(width,height,filename)
 .then( async (result)=>{
     
        if (result==='notfound')
            {
                res.send("enter valid filename")
            }
        else if(result==='resize')
        {
            await resize(width,height,filename);
            next();
            
            }
     else {
         next();}
                 }
    )
}
const findIfFileExist=async(width:number,height:number,filename:string):Promise<string>=>{
const file=await fspromises.readFile('./photos.txt','utf-8');
const arr:string[]=file.split('\n');
let str='notfound';
for(let i=1;i<arr.length;i++){
    const data=arr[i].split(',');
    if(filename===data[0]){
        
        if(width===parseInt(data[1])&&height===parseInt(data[2])){
            str='found';
            return str;
        }
        str='resize';

    }
    
} 
    return str;                                                                   
                                                                
}

export default valid;
export {findIfFileExist}
