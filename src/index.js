import './styles.css';
import homePage from './pages/home.js';
import menuPage from './pages/menu.js';
import contactPage from './pages/contact.js';
document.addEventListener('DOMContentLoaded', () => {
    homePage();
});
document.getElementById('home-btn').addEventListener('click', homePage);
document.getElementById('menu-btn').addEventListener('click', menuPage);
document.getElementById('contact-btn').addEventListener('click', contactPage);
