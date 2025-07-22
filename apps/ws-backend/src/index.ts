import { WebSocketServer } from "ws";

const ws = new WebSocketServer({
    port: 3002
})

ws.on('connection',(socket, request)=>{
    const url = request.url;

    if(!url){
        return;
    }

    const queryParams = new URLSearchParams(url.split('?')[1])

    socket.send("Connected to ws server")
})