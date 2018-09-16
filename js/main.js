// SELECT THE ITEM FORM THE DOM
const sel = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu'),
  menuBranding = document.querySelector('.menu-branding'),
  navItems = document.querySelectorAll('.list-item'),
  menuNav = document.querySelector('.menu-nav');

let showMenu = false;
sel.addEventListener('click', showMenuEver);
function showMenuEver(e) {
  if (!showMenu) {
    sel.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((element, index) => {
      element.classList.add('show');
    });

    showMenu = true;
  } else {
    sel.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((element, index) => {
      element.classList.remove('show');
    });
    showMenu = false;
  }

  e.preventDefault();
}
