import express from 'express';
import bodyParser from 'body-parser';
import router from './routes.js';

const app=express();
// const router=express.Router();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/", router);

app.listen(8081, ()=>{
    console.log("API is listening on port 8081");
});

