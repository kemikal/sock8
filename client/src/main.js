
import { printchat } from './chat.js';
import { logInForm } from './printLogInBtn.js';
import { logOutBtn } from './printLogOutBtn.js';

export let app = document.querySelector('#app');
export let formDiv = document.createElement('div'); // kunde inte nå ''document'' i dem andra mopdulerna , la det i main och imorterade från main

if(localStorage.getItem('user')){
    logOutBtn();
    printchat()
} else {
    logInForm()

}

//localStorage.clear()