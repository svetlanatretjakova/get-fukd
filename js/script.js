document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('mainText').classList.add('hidden');
    document.getElementById('clickMe').classList.remove('hidden');
  }, 3000);
});

function goToNextPage() {
  window.location.href = 'challengePage.html';
}
