'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Making function for the event listener to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Function for even listener btnOpenModal
const openModal = function () {
  modal.classList.remove('hidden'); // removing the hidden css element to show the modal
  overlay.classList.remove('hidden'); // removing the hidden css element to show the overlay blur
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
// Using function closeModal instead of making the same
// anonymous function 2 times for the eventHandler
// don't need these in for loop now because they all open the 1 modal.. there are [i] buttons
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// listen fo esc key on entire document
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
