var express = require('express');
const router = express.Router();

const server = require("http").createServer(express);
const io = require('socket.io')(server, {
    cors: {
        origin:'*',
        methods: ['GET', ' POST']
    }
})

io.on('connection', function(socket) {
    //console.log("lyckad kopplad", socket);

    socket.emit("chat", "hello world")

    socket.on("chat", (arg) =>{
        console.log("kommande chat", arg);
        io.emit("chat", arg);
    })

    socket.on("disconnect", function () {
        console.log("Användare från kopplad");
    })
})

server.listen(3001);
module.exports = router;
