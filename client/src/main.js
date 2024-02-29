import './styles/style.css';
import { printchat } from './chat';
import { logInForm } from './printLogInBtn';

export let app = document.querySelector('#app');

if(localStorage.getItem('user')){
    printchat()
} else {
    
    logInForm()
}

//localStorage.clear()