const mabiniImg = document.getElementById('mabiniImg');
  const mabiniText = document.getElementById('mabiniText');

  mabiniImg.addEventListener('click', () => {
    mabiniText.classList.toggle('open');
  });