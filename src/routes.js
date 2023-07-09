const express= require('express');
const updateProduct= require('./modules/test/demo.controller');
const router = express.Router();
const TODO = require('./utils/mock')

router.get('/',(req,res)=>
{
    res.send(`<h2>Hello World</h2>`);
});

router.get('/test',(req,res)=>{
    res.send(`<h2>This is a test route</h2>`);
});

router.get('/test/:id/:bd',(req,res)=>{
    console.log(res)
    res.send({
        data:123
    });
    // res.send({req});
});

router.get('/tasks/:type',(req,res)=>{
    const tasks = TODO.filter(v => v.status.toLowerCase() === req.params.type);
    res.send({data:tasks});
});

router.get('/task/:id',(req,res)=>{
    const task = TODO.find(v => v.id.toLowerCase() === req.params.id);
        res.send(`
        <h2>Task Details</h2>
        <p>Title: ${task.title}</p>
        <p>ID: ${task.id}</p>
        <p>Status: ${task.status}</p>
    `);
});

router.post('/product',(req, res) => {
    console.log(req.body);
    res.send(`<h2>Hello this is test </h2>`);
});

router.put('/product',updateProduct);

module.exports= router;
