import "./main.css";
import { renderWelcome } from "./pages/welcome";
import { menu } from "./pages/menu";
import { coffee } from "./pages/coffee";
import { whyUs } from "./pages/why-us";

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
    const itemID = item.id;

    // Guard Clause
    if(!item.classList.contains('nav-link')) return;
    
    const pageContainer = document.querySelector('.page-container');
    siteCard.removeChild(pageContainer); 

    if(itemID === 'Menu') {
        menu();
    } else if(itemID === 'Home') {
        renderWelcome();
    } else if(itemID === 'Coffee') {
        coffee();
    } else if(itemID === 'Why Us?') {
        whyUs();
    } 
}

window.addEventListener('click', switchTab);