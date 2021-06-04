'use strict';

let menuBurger = document.querySelector('.menu-burger');
let menuItems = document.querySelector('.menu-items');
let menu = document.querySelector('.menu');
const menuItem = document.querySelector('.menu-item');

console.log(menuItems);
console.log(menu);
menuBurger.addEventListener('click', () => {
  console.log('Привееет');
  
  menu.classList.toggle('menu-active');
  menuItems.classList.toggle('menu-items_active');
  menuItem.classList.toggle('menu-item-active');

});