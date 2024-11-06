'use strict';

const a = document.querySelectorAll('a');
const largeImg = document.querySelector('#largeImg');

for (const item of a) {
  item.addEventListener('click', (evnt) => {
    evnt.preventDefault();
    largeImg.src = item.href;
  });
}
