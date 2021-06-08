'use strict';

// кнопка открытия окна
const modalOpen = document.querySelector('.modal__open');
// все полностью модальное окно
const modalWindow = document.querySelector('.modal');
// подложка модального окна
const modalOverlay = document.querySelector('.modal__overlay');
// модальное окно
const modaDialog = document.querySelector('.modal__dialog');
// кнопка закрытия окна
const modalClose = document.querySelector('.modal__close');

const openModalWindow = () => {

  modalOverlay.classList.remove('hidden');
  modaDialog.classList.remove('hidden');
  disableScroll();
}

const closeModalWindow = () => {

  modalOverlay.classList.add('hidden');
  modaDialog.classList.add('hidden');
  enableScroll();
  // e.preventDefault();
}

modalOpen.addEventListener('click', () => {

  openModalWindow();

})

modalWindow.addEventListener('click', (event) => {

  const target = event.target;

  if (target.classList.contains('modal__overlay') ||
      target.classList.contains('modal__close-img')) {
        closeModalWindow();
      }

})

// modalWindow.addEventListener('keydown', (event) => {
  
//   const key = event.key;

//   if ((target.classList.contains('modal__overlay') ||
//       target.classList.contains('modal__close-img')) &&
//       key === 'Escape') {
//         closeModalWindow();
//       }

// })

const disableScroll = () => {

  document.body.dataset.scrollY = window.scrollY;

  // вычисляю ширину скролла справа. ширину экрана отнимаю от ширины браузера
  // innerWidth - ширина экрана устройства
  // offsetWidth - ширина браузера
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.style.cssText = `
    position:fixed;
    top: -${window.scrollY}px;
    left:0;
    width:100%;
    overflow:100vh;
    padding-right: ${scrollWidth};
  `;

}

const enableScroll = () => {

  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dataset.scrollY
  })

}