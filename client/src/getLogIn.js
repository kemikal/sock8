import { printchat } from "./chat";
import { formDiv } from "./printLogInBtn";


export function getLogIn(email, password, message) {
    let checkLogIn = {userEmail: email, userPassword: password}

    fetch('HTTP://localhost:3000/api/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(checkLogIn)
    })
    .then(res => res.json())
    .then(data => {

        if(data.message) {
            message.textContent = data.message
           setTimeout( ()=> {
            message.textContent = '';
           } , 2000)
        } else {
            formDiv.innerHTML = '';
           let setUser = JSON.stringify(data)
           localStorage.setItem('user', setUser)

            printchat()
        }
    })
}