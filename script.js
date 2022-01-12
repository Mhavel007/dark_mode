const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  // muda o tema do site
  document.body.classList.toggle('dark');
});