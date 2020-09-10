import { renderWelcome } from "./pages/welcome"
import { menu } from "./menu"
import { coffee } from "./coffee"

const siteCard = document.querySelector('.site-card');
/* ----------- RENDER NAV ---------- */
const nav = document.createElement('nav');
nav.classList.add('nav');

const navList = document.createElement('ul');
navList.classList.add('nav-list');

const homeLinks = ['Home', 'Menu', 'Coffee', 'Why Us?']

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

/* --------------------------------- */
// Is this needed? 
const changeTab = (id) => {
    const tabNames = document.getElementsByClassName('nav-link');
    for(let i = 0; i < tabNames.length; i++) {
        if(tabNames[i].classList.contains('active')) {
            tabNames[i].classList.remove('active');
        }
    }
    let activeTab = document.getElementById(id);
    activeTab.classList.add('active');
}

const switchTab = (event) => {
    const item = event.target;
    const pageContainer = document.querySelector('.page-container');
    siteCard.removeChild(pageContainer); 
    
    // Guard Clause
    if(!event.target.classList.contains('nav-link')) return;

    if(item.id === 'Menu') {
        changeTab(item.id);
        menu();
    } else if(item.id === 'Home') {
        changeTab(item.id);
        renderWelcome();
    } else if(item.id === 'Coffee') {
        changeTab(item.id);
        coffee();
    }
}

window.addEventListener('click', switchTab);