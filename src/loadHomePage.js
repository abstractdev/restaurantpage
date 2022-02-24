import {home} from './home'
function loadHomePage() {
    const body = document.querySelector('body');
    const headerContainer = document.createElement('div');
    const header = document.createElement('div');
    const headerLeft = document.createElement('div');
    const headerRight = document.createElement('div');
    const tabsContainer = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');
    const homeContent = document.createElement('div');
    const info = document.createElement('h1');
    const logo = document.createElement('img');

    const createHeader = (() => {
        headerContainer.classList.add('headerContainer');
        logo.classList.add('logo');
        logo.setAttribute('src', 'https://images.unsplash.com/photo-1632871704132-d21dfc90b74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80');
        header.classList.add('header');
        headerLeft.classList.add('headerLeft');
        headerRight.classList.add('headerRight');
        headerRight.textContent = "Just Avocados";
        body.appendChild(headerContainer);
        headerContainer.appendChild(header);
        header.appendChild(headerLeft);
        header.appendChild(headerRight);
        headerLeft.appendChild(logo);
    })();
    
    const createTabs = (() => {
        tabsContainer.classList.add('tabsContainer');
        homeTab.classList.add('homeTab');
        menuTab.classList.add('menuTab');
        contactTab.classList.add('contactTab');
        homeTab.textContent = 'Home';
        menuTab.textContent = 'Menu';
        contactTab.textContent = 'Contact';

        headerContainer.appendChild(tabsContainer);
        tabsContainer.appendChild(homeTab);
        tabsContainer.appendChild(menuTab);
        tabsContainer.appendChild(contactTab);
    })();

    const createHomeContent = (() => {
        home();
    })();
}

export { loadHomePage };