import io from 'socket.io-client';
const socket = io('http://localhost:3001');

export default function printchat(){
    let sendMsg = document.querySelector("#sendMsg");
    let sendBtn = document.querySelector("#sendBtn");
    let chatList = document.querySelector("#chat");
    
    sendBtn.addEventListener("click", () => {
      console.log("send chat", sendMsg.value);
      socket.emit("chat", sendMsg.value);
    })
    
    socket.on("chat", (arg) => {
      console.log("socket", arg);
      updateChat(arg);
    })
    
    function updateChat(chat) {
      let li = document.createElement("li")
      li.innerText = chat ;
      chatList.appendChild(li);
    }
}