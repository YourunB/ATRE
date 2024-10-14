//------------------------------------управление списком
const activity = document.querySelector('.activity-box');
const activityItems = document.querySelectorAll('.activity-list__item');

if (activity) {
  activity.addEventListener('click', (e) => {
    if (e.target.classList.contains('activity-list__item')) (e.target.classList.toggle('activity-list__item_checked'))
  });
}

//------------------------------------управление меню
const btnOpenMenu = document.querySelector('#btn-open-menu');
const btnCloseMenu = document.querySelector('#btn-close-menu');
const navigationMenu = document.querySelector('.header-navigation');

btnOpenMenu.addEventListener('click', () => {
  navigationMenu.classList.add('header-navigation_show');
  btnOpenMenu.classList.add('btn-menu_hide');
  btnCloseMenu.classList.remove('btn-menu_hide');
  document.body.classList.add('scroll-off');
})

btnCloseMenu.addEventListener('click', () => {
  navigationMenu.classList.remove('header-navigation_show');
  btnOpenMenu.classList.remove('btn-menu_hide');
  btnCloseMenu.classList.add('btn-menu_hide');
  document.body.classList.remove('scroll-off');
})

//----------------------------------контроль скролла
window.addEventListener('resize', () => {
  const width = document.body.getBoundingClientRect().width;
  if (width >= 992) document.body.classList.remove('scroll-off');
  if (width <= 992 && btnOpenMenu.classList.contains('btn-menu_hide')) document.body.classList.add('scroll-off');
})

//------------------------------------контакты в header
const btnMenuContacts = document.querySelector('.menu__item__name');
const menuContacts = document.querySelector('.header-contacts');
const arrowMenuContacts = document.querySelector('.menu__item__name__arrow');

btnMenuContacts.addEventListener('click', () => {
  btnMenuContacts.classList.toggle('menu__item_checked');
  if (btnMenuContacts.classList.contains('menu__item_checked')) {
    arrowMenuContacts.classList.add('menu__item__name__arrow_show');
    menuContacts.classList.add('header-contacts_show');
  } else {
    arrowMenuContacts.classList.remove('menu__item__name__arrow_show');
    menuContacts.classList.remove('header-contacts_show');
  }
});

//--------------------------------------при скролле изменить header и следить за кнопкой вверх
const header = document.querySelector('.header');
const btnTop = document.querySelector('.btn-top');

let timeout;

window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    window.scrollY > 50 ? header.classList.add('header_scrolled') : header.classList.remove('header_scrolled');
    window.scrollY > 200 ? btnTop.classList.add('btn-top_show') : btnTop.classList.remove('btn-top_show');
  }, 250);
});

btnTop.addEventListener('click', () => {
  btnTop.classList.remove('btn-top_show');
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
