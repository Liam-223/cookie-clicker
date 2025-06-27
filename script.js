let count = 0;
const countDisplay = document.getElementById('count');
const cookie = document.getElementById('cookie');

cookie.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
