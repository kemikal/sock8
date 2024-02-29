import io from 'socket.io-client';
const socket = io('http://localhost:3001');



export function printchat(){


  let messageText = docment.createElement('input');
  messageText.placeholder = 'Skriv ditt meddelande';

  let sendBtn = document.createElement('button')
  sendBtn.textContent ='Skicka'

  let chatList = document.createElement('ul');
    
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
    app.append(messageText, sendBtn, chatList);
}