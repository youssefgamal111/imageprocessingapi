import { promises as fspromises } from 'fs';
import sharp from "sharp";
const resize= (width:number,height:number,filename:string):Promise<void>=>{
  
    
  
       return sharp(`photos/${filename},1920,1280.jpg`)
        .resize(width, height)
        .toFile(`photos/${filename},${width},${height}.jpg`).then(()=>writeData(`${filename},${width},${height}\n`));
     
        
    

}

    const writeData = async (data:string) => {
        const myFile = await fspromises.open('photos.txt','a+');
        await myFile.write(data);
        await myFile.close();
      }
      export {resize}