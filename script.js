let count = 0;
const cookie = document.getElementById('cookie');
const countDisplay = document.getElementById('count');
const toggleTheme = document.getElementById('toggleTheme');

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

cookie.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;

  // Add animation effect
  cookie.style.transform = 'scale(1.1)';
  setTimeout(() => {
    cookie.style.transform = 'scale(1)';
  }, 100);
});

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
