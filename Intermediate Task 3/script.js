// Modal Pop-Up
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Coffee Quiz
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = document.getElementById('question1').value;
  let result = '';

  if (answer === 'espresso') {
    result = 'You’re an Espresso! Bold and intense, just like your coffee.';
  } else if (answer === 'latte') {
    result = 'You’re a Latte! Smooth, balanced, and always comforting.';
  } else if (answer === 'cappuccino') {
    result = 'You’re a Cappuccino! Light, frothy, and full of energy.';
  }

  quizResult.textContent = result;
});