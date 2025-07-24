import express from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { middleware } from './middleware';
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from '@repo/common/types';

const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.post('/signin', (req,res)=>{
    const data = SignInSchema.safeParse(req.body);
    if(!data.success){
        return res.status(403).json({
            message: "Incorrect inputs"
        })
    }
    const userId = 1;
    const token = jwt.sign({
        userId
    }, jwtSecret as string)
})

app.post('/signup', (req,res)=>{

    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        return res.status(403).json({
            message: "Incorrect inputs"
        })
    }
})

app.post('/joinroom',middleware, (req,res)=>{

    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        return res.status(403).json({
            message: "Incorrect inputs"
        })
    }
    res.json({
        roomId : "123"
    })
    
})

app.listen(3001, ()=>{
    console.log('http server running on 3001')
})