const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', function () {
    const cardId = card.getAttribute('id');
    window.location.href = `recipes/${cardId}`;
  });
}

// event.preventDefault() // evita o refresh da pagína.
