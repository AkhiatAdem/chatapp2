const express = require("express");
const socketio = require("socket.io");

const app = express();
app.use(express.static('public'));

const server = app.listen(5173, () => {
    console.log('Server running!');
});

const io = socketio(server);

io.on("connection", (socket) => {


    socket.on("h", (message,username) => {
        
        io.emit('r',message,username);

    });
    socket.on('x',(message)=>{
        io.emit('xr',message);
    })
    
});

