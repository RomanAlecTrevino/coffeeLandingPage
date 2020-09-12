import "./main.css";
import { renderWelcome } from "./pages/welcome";
import { menu } from "./pages/menu";
import { coffee } from "./pages/coffee";

export const siteCard = document.querySelector('.site-card');

/* ----------- RENDER NAV ---------- */
const nav = document.createElement('nav');
nav.classList.add('nav');

const navList = document.createElement('ul');
navList.classList.add('nav-list');

const homeLinks = ['Home', 'Menu', 'Coffee', 'Why Us?'];

homeLinks.forEach(link => {
   let listItem =  document.createElement('li');
   listItem.innerHTML = `${link}`;
   listItem.setAttribute('id', `${link}`);
   listItem.classList.add('nav-link')

   navList.appendChild(listItem);
});

nav.appendChild(navList);
siteCard.appendChild(nav);

renderWelcome();

/* ---------- TABS ---------- */
const switchTab = (event) => {
    const item = event.target;

    // Guard Clause
    if(!item.classList.contains('nav-link')) return;
    
    const pageContainer = document.querySelector('.page-container');
    siteCard.removeChild(pageContainer); 

    if(item.id === 'Menu') {
        menu();
    } else if(item.id === 'Home') {
        renderWelcome();
    } else if(item.id === 'Coffee') {
        coffee();
    }
}

window.addEventListener('click', switchTab);