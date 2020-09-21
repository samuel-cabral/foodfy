const cards = document.querySelectorAll('.card');

for (const card of cards) {
  cards[card].addEventListener('click', function() {
    window.location.href = `recipes/${card}`;
  });
}