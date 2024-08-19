import express from 'express';
import cors from 'cors';
import fs from 'fs';
import  {format}  from 'date-fns';


const app=express();

app.use(cors());
const port=4000;

app.get('/',(req,res)=>{
 const today=format(new Date(), 'dd-MM-yyyy-HH-mm-ss');
 const filepath=`timestamp/date`;
 
 fs.writeFileSync(filepath,`${today}`, 'utf8');
 res.status(200).send('File created successfully');
  
})

app.get('/getFiles',(req, res)=>{
   try {
    const files=fs.readFileSync('timestamp/date','utf8');
    res.status(200).send(files);
   } catch (error) {
    console.log(error);
   }
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})