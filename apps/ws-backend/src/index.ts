import { WebSocketServer } from "ws";
import jwt from 'jsonwebtoken';

const ws = new WebSocketServer({
    port: 3002
})

ws.on('connection',(socket, request)=>{
    const url = request.url;

    if(!url){
        return;
    }

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if(typeof decoded === 'string'){
        ws.close();
        return;
    }

    if(!decoded || !decoded.userId){
        ws.close();
        return;
    }

    ws.on('message',(data)=>{
        data.send("Hey!")
    })

    socket.send("Connected to ws server")
})