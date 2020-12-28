var elMenuBtn = document.querySelector('.site-header__menu-btn');
var elMain = document.querySelector('.main');

elMenuBtn.addEventListener('click', function() {
  elMain.classList.toggle('active');
})