const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", () => { 
    modalOverlay.classList.add('active');  
   })
}

document.querySelector('.button-close-modal').addEventListener("click", () => {
  modalOverlay.classList.remove("active");
})