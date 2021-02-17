var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (req , res) => {
  res.render("index");
})

io.on("connection",(socket) => {

  socket.on("disconnect", () => {
    console.log("X Desconectou: " + socket.id);
  })
  
  socket.on("msg", (data) => {
    io.emit("showMsg", data);
  })

});

http.listen(4000,() => {
  console.log("Server On!");
})