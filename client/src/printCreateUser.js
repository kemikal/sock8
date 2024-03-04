import { logInForm } from "./printLogInBtn.js"
import { formDiv } from './main';
import { getSignUp } from "./getSignUp.js";

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

    let textColourInput = document.createElement('input');
    textColourInput.placeholder = "Choose your colour";
    textColourInput.setAttribute('list', 'colorOptions');

    let textColourOptions = document.createElement('datalist');
    textColourOptions.id = 'colorOptions';

    let blueTextColour = document.createElement('option');
    blueTextColour.value = 'Blå';

    let redTextColour = document.createElement('option');
    redTextColour.value = 'Röd';

    let greenTextColour = document.createElement('option');
    greenTextColour.value = 'Grön';

    textColourOptions.appendChild(blueTextColour);
    textColourOptions.appendChild(redTextColour);
    textColourOptions.appendChild(greenTextColour);

    let message = document.createElement('p');

    let signUpBtn = document.createElement('button');
    signUpBtn.textContent = 'Sign up'

    let goToStartPageBtn = document.createElement('button');
    goToStartPageBtn.textContent = 'Gå tillbaka';

    goToStartPageBtn.addEventListener('click', () => {
        logInForm()
        
    })

    signUpBtn.addEventListener('click', () => {
        getSignUp(inputUserName.value, inputEmail.value, inputPassword.value, textColourInput.value, message)
    })
    formDiv.append(heading, inputUserName, inputEmail, inputPassword, textColourInput, textColourOptions, message , signUpBtn, goToStartPageBtn);
    app.appendChild(formDiv)
    
}