'use strict';

const menuBurger = document.querySelector('.menu-burger'),
  menuItems = document.querySelector('.menu-items'),
  menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu-item');

menuBurger.addEventListener('click', () => {
  
  menu.classList.toggle('menu-active');
  menuItems.classList.toggle('menu-items_active');
  menuItem.classList.toggle('menu-item-active');

});


menuItems.addEventListener('click', () => {

  menu.classList.toggle('menu-active');
  menuItems.classList.toggle('menu-items_active');
  menuItem.classList.toggle('menu-item-active');

});