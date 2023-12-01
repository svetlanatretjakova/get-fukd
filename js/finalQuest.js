document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('message').classList.remove('hidden');
  }, 0);

  setTimeout(function () {
    document.getElementById('message').classList.add('hidden');
    document.getElementById('question').classList.remove('hidden');
  }, 2000);

  setTimeout(function () {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('finalButton').classList.remove('hidden');
  }, 4000);
});

function showLastQuestion() {
  document.getElementById('finalButton').classList.add('hidden');
  document.getElementById('lastQuestion').classList.remove('hidden');
  generateChaoticButtons();
}

function generateChaoticButtons() {
  const chaoticButtonsContainer = document.getElementById('chaoticButtons');
  const buttonCount = 10;

  for (let i = 0; i < buttonCount; i++) {
    const button = document.createElement('button');
    button.innerText = 'Who says I am gay';
    button.onclick = function () {
      handleButtonClick(button);
    };

    positionButtonRandomly(button);
    chaoticButtonsContainer.appendChild(button);
  }

  chaoticButtonsContainer.classList.remove('hidden');
}

function positionButtonRandomly(button) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const randomX = Math.floor(Math.random() * screenWidth);
  const randomY = Math.floor(Math.random() * screenHeight);

  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}

function handleButtonClick(button) {
  if (button.innerText === 'Who says I am gay') {
    button.innerText = 'Click on me comrade';
  } else {
    window.location.href = 'hehehe.html';
  }
}
