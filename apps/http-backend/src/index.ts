import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.post('/signin', (req,res)=>{
    
})

app.post('/signup', (req,res)=>{

})

app.post('/joinroom', (req,res)=>{
    
})

app.listen(3001, ()=>{
    console.log('http server running on 3001')
})