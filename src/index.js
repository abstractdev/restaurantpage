import './style.css';
import {loadHomePage} from './loadHomePage'
import {home} from './home'
import {menu} from './menu'
import {contact} from './contact'

loadHomePage();

    const switchTabs = (() => {
        document.querySelector('.homeTab').addEventListener('click', function() {
            if (document.contains(document.querySelector('.menuContent'))) {
                document.querySelector('.menuContent').remove();
                home();
            }
            else if (document.contains(document.querySelector('.contactContent'))) {
                document.querySelector('.contactContent').remove();
                home();
            }
        })
        document.querySelector('.menuTab').addEventListener('click', function() {
            if (document.contains(document.querySelector('.contactContent'))) {
                document.querySelector('.contactContent').remove();
                menu();
            }
            else if (document.contains(document.querySelector('.homeContent'))) {
                document.querySelector('.homeContent').remove();
                menu();
            }
        })
        document.querySelector('.contactTab').addEventListener('click', function() {
            if (document.contains(document.querySelector('.menuContent'))) {
                document.querySelector('.menuContent').remove();
                contact();
            }
            else if (document.contains(document.querySelector('.homeContent'))) {
                document.querySelector('.homeContent').remove();
                contact();
            }
        })

    })();

