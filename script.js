// const menu = document.querySelector('.ul-nav');

// document.querySelector('#menu').onclick = () =>{
//     menu.classList.toggle('active');
// };

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});