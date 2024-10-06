//------------------------------------управление списком
const activity = document.querySelector('.activity-box');
const activityItems = document.querySelectorAll('.activity-list__item');

activity.addEventListener('click', (e) => {
 if (e.target.classList.contains('activity-list__item')) (e.target.classList.toggle('activity-list__item_checked'))
})

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

window.addEventListener('resize', () => {
  const width = document.body.getBoundingClientRect().width;
  if (width >= 992) document.body.classList.remove('scroll-off');
  if (width <= 992 && btnOpenMenu.classList.contains('btn-menu_hide')) document.body.classList.add('scroll-off');
})