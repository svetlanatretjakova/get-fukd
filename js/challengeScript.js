function checkAnswer() {
  const userInput = document.getElementById('userInput').value.toLowerCase().trim();
  const correctAnswer = 'nigga';
  const resultElement = document.getElementById('result');

  if (userInput === correctAnswer) {
    resultElement.innerText = 'Ducking Unbelievable.';
    resultElement.style.color = '#33cc33';
    setTimeout(function () {
      window.location.href = 'priceCheck.html';
    }, 2000);
  } else {
    resultElement.innerText = 'Sorryyyyyyyyy....';
    resultElement.style.color = '#ff3333';
  }

  resultElement.classList.remove('hidden');
}
