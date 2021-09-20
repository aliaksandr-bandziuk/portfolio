'use strict';

const mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuList = document.querySelector('.mobile-menu__list');

const toggleMenu = () => mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu__close');
  mobileMenuList.classList.toggle('mobile-menu__list-hidden');
})

toggleMenu();

// const menuBurger = document.querySelector('.menu-burger'),
//   menuItems = document.querySelector('.menu-items'),
//   menu = document.querySelector('.menu'),
//   menuItem = document.querySelectorAll('.menu-item');

// menuBurger.addEventListener('click', () => {
  
//   menu.classList.toggle('menu-active');
//   menuItems.classList.toggle('menu-items_active');
//   menuItem.classList.toggle('menu-item-active');

// });


// menuItems.addEventListener('click', () => {

//   menu.classList.toggle('menu-active');
//   menuItems.classList.toggle('menu-items_active');
//   menuItem.classList.toggle('menu-item-active');

// });