
import { getLogIn } from "./getLogIn.js";
import { printSignUp } from "./printCreateUser.js";
import { formDiv } from "./main.js";





export function logInForm() {
    formDiv.setAttribute('class', 'form-div')

    formDiv.innerHTML = '';
    let heading = document.createElement('h1')
    heading.textContent = 'Logga in'
     
    let inputEmail = document.createElement('input');
    inputEmail.placeholder = 'Email';

    let inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.placeholder = 'Lösenord';

    let message = document.createElement('p');

    let signInBtn = document.createElement('button');
    signInBtn.textContent = 'Logga in'

    let createAccountLink = document.createElement('a');
    createAccountLink.textContent = 'Create new account'

    signInBtn.addEventListener('click', () => {
        getLogIn(inputEmail.value, inputPassword.value, message)
    })

    createAccountLink.addEventListener('click', () => {
        printSignUp();
    })
    formDiv.append(heading, inputEmail, inputPassword, message, signInBtn, createAccountLink)
    app.appendChild(formDiv);
}