'use strict';

const scrollTop = document.querySelector('.scroll-top');

scrollTop.addEventListener('click', () => {
  
  window.scrollTo({
    top: 1,
    behavior: "smooth"
});

})