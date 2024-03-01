import './styles/style.css'
import { printchat } from './chat';
import { logInForm } from './printLogInBtn';
import { logOutBtn } from './printLogOutBtn.js';

export let app = document.querySelector('#app');

if(localStorage.getItem('user')){
    printchat()
    logOutBtn();
} else {
    logInForm()

}

//localStorage.clear()