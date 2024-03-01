
import { printchat } from './chat.js';
import { logInForm } from './printLogInBtn.js';
import { logOutBtn } from './printLogOutBtn.js';

export let app = document.querySelector('#app');

if(localStorage.getItem('user')){
    logOutBtn();
    printchat()
} else {
    logInForm()

}

//localStorage.clear()