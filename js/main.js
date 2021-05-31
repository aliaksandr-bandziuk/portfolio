'use strict';

const noHrefs = document.querySelectorAll('.nohref');

const cleanHrefs = () => {

  noHrefs.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
    })
  })

}

cleanHrefs();