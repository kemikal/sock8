import { log } from "debug/src/browser.js";
import { logInForm, formDiv } from "./printLogInBtn.js";
import { getLogIn } from "./getLogIn.js";

export function logOutBtn() {
    
    let logOutBtn = document.createElement('button');
    logOutBtn.textContent = "Logga ut";
    logOutBtn.classList.add('logOutBtn');
    formDiv.appendChild(logOutBtn);

    logOutBtn.addEventListener('click', () => {
        console.log("click");

        document.body.innerHTML = "";

        let loggedOutMessage = document.createElement('h1');
        loggedOutMessage.textContent = "Du är nu utloggad.";
        document.body.appendChild(loggedOutMessage);

        let logInAgainMsg = document.createElement('h1');
        logInAgainMsg.textContent = "Klicka på knappen för att logga in igen";
        document.body.appendChild(logInAgainMsg);

        let backToLogin = document.createElement('button');
        backToLogin.textContent = "Logga in igen";
        document.body.appendChild(backToLogin);

        backToLogin.addEventListener('click', () => {
            console.log("click");
            console.log(logInForm());
        })
    })
}