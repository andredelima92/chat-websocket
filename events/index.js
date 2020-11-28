module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("usuario conectado");

    socket.on("message", (msg) => {
      console.log(msg);
      socket.broadcast.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("conexao caiu");
    });
  });
};
