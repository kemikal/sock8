import { formDiv, logInForm } from "./printLogInBtn"
import { getSignUp } from "./getSignUp";

export function printSignUp() {
    formDiv.innerHTML = '';

    let heading = document.createElement('h1')
    heading.textContent = 'Skapa ny användare';

    let inputUserName = document.createElement('input');
    inputUserName.placeholder = 'userName';

    let inputEmail = document.createElement('input');
    inputEmail.placeholder = 'Email';

    let inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.placeholder = 'Password';

    let message = document.createElement('p');

    let signUpBtn = document.createElement('button');
    signUpBtn.textContent = 'Sign up'

    let goToStartPageBtn = document.createElement('button');
    goToStartPageBtn.textContent = 'Gå tillbaka';

    goToStartPageBtn.addEventListener('click', () => {
        logInForm()
        
    })

    signUpBtn.addEventListener('click', () => {
        getSignUp(inputUserName.value, inputEmail.value, inputPassword.value, message)
    })
    formDiv.append(heading, inputUserName, inputEmail,inputPassword, message , signUpBtn, goToStartPageBtn);
    app.appendChild(formDiv)
}