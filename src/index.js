const express= require('express');
const bodyParser= require('body-parser');
const router= require('./routes.js');

const app=express();
// const router=express.Router();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/", router);

app.listen(8081, ()=>{
    console.log("API is listening on port 8081");
});

