function showResult(userChoice) {
  const resultElement = document.getElementById('result');
  let message;

  if (userChoice === '1') {
    message = 'Congratulations! You have an excellent taste in affordable negros.';
    resultElement.style.color = '#33cc33';
    setTimeout(function () {
      window.location.href = 'finalQuest.html';
    }, 2000);
  } else if (userChoice === '10') {
    message = 'Think twice, cmon!';
    resultElement.style.color = '#ffcc00'; // piss color
  } else if (userChoice === 'priceless') {
    message = 'Are you kidding me?';
    resultElement.style.color = '#ffcc00';
  } else {
    message = 'Please select a valid option.';
    resultElement.style.color = '#ff3333';
  }

  resultElement.innerText = message;
  resultElement.classList.remove('hidden');
}
