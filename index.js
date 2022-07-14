const express = require('express');
const db = require('./config/mongoose');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//to hit the endpoint use http://localhost:5000/api/videos/data?q=football&pageNo=1 
app.use('/api',require('./router'));

app.listen(PORT,()=>{
  console.log(`success on ${PORT}`);
});