const express = require("express");
const app = express();

app.use(express.static("status"))
app.listen(3000,()=>{
    console.log("servidor iniciado");   
})
