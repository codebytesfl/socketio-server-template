const options = { /* ... */ };
const io = require("socket.io")(options);

// Connnection Event
io.on("connection", socket => { 
    io.emit('socket connected', socket.id)
    emitMessages()
});


// Looping Function
const emitMessages = async () => {
    for(i = 0; i < 5; i++) {
        const int = Math.floor(Math.random() * 100)

        io.emit(`message-${int}`, {text: `hello-${int}`})
        await sleep(1000)
    }
}

// SLeep Function
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}   

io.listen(3000);