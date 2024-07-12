const express = require('express');
const app = express();


// app.get('/',(req,res)=>{
//     res.send("hello");
// })

app.get('/get',(req,res)=>{
    res.send("helloWorld");
})

app.listen(8080,()=>{
    console.log("Server Conneted"); 
    // res.send("Hello developers ");
})