import express from 'express';
import imageroute from './Api/Images/index'
import apiroute from './Api';
const app:express.Application=express();
const port:number=8080;
app.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
});

app.use('/api/images',imageroute);
app.use('/api',apiroute);
export default app;