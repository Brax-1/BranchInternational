const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const http = require('http').createServer(app)
const userRoutes = require("./routes/userRoutes")
const queryRoutes = require("./routes/queriesRoutes")
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:3000"
    }
  });

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes)
app.use("/api/queries",queryRoutes)

const URL="mongodb+srv://brax123:Alok1234@branchinternationalclus.hzpxga5.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL).then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(err," pls solve this error")
})
http.listen(4000, function() {
  console.log('listening on port 4000')
})
io.on('connection', socket => {
  socket.on('message', ({ userId, message }) => {
    io.emit('message', { userId, message });
  })
  socket.on('resolve', ({ queryId, solution }) => {
    io.emit('resolve', { queryId, solution });
  })
})
