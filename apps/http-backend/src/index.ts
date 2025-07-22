import express from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { middleware } from './middleware';

const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.post('/signin', (req,res)=>{
    const userId = 1;
    const token = jwt.sign({
        userId
    }, jwtSecret as string)
})

app.post('/signup', (req,res)=>{

})

app.post('/joinroom',middleware, (req,res)=>{
    res.json({
        roomId : "123"
    })
    
})

app.listen(3001, ()=>{
    console.log('http server running on 3001')
})