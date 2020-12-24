document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.header__menuBtn');
  const menu = document.querySelector('.header__menu');
  let isMobileMenu = false;

  //Listeners
  document.addEventListener('click', (e) => {
    if (e.target.closest('.header__menuBtn')) {
      onBurgerClicked();
    }
  })


  //Functions
  function onBurgerClicked() {
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
      openMobileMenu();
    }
    else {
      closeMobileMenu();
    }
  }
  function openMobileMenu() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  }
})
