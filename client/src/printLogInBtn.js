
import { getLogIn } from "./getLogIn";
import { printSignUp } from "./printCreateUser";


export let formDiv = document.createElement('div');
formDiv.setAttribute('class', 'form-div')

export function logInForm() {
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