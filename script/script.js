"use strict"

const showButton = document.querySelector('.show-modal');
const closeButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

showButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === "Escape") {
        if(!modal.classList.contains('hidden')) closeModal();
    }
})
