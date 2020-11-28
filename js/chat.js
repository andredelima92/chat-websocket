window.addEventListener("load", () => {
  let socket = io();

  socket.on("message", (msg) => {
    writeMessageByClass("recived", msg);
  });

  function writeMessageByClass(className, msg) {
    const chat = document.querySelector("div.messages");
    var heightChat = chat.scrollHeight;

    const p = document.createElement("p");
    p.className = className;

    const content = document.createTextNode(msg);
    p.appendChild(content);

    chat.appendChild(p);

    chat.scrollTop = heightChat;
  }

  document.querySelector("button").addEventListener("click", () => {
    const input = document.querySelector("input");
    const newMessage = input.value;

    if (!newMessage) return;

    input.value = "";

    socket.emit("message", newMessage);

    writeMessageByClass("sended", newMessage);
  });
});
