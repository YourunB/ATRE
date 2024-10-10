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

//----------------------------------слайдеры команты
const sliderTeam = document.querySelector('.team-slider');
const sliderIndividual = document.querySelector('.individual-slider');

if (sliderTeam) {
  sliderTeam.addEventListener('click', (e) => {
    if (e.target.classList.contains('team-slider__slide__img')) {
      sliderTeam.classList.add('team-slider_hide');
      sliderIndividual.classList.remove('individual-slider_hide');
    }
  });
}

if (sliderIndividual) {
  sliderIndividual.addEventListener('click', (e) => {
    if (e.target.classList.contains('slide-close')) {
      sliderIndividual.classList.add('individual-slider_hide');
      sliderTeam.classList.remove('team-slider_hide');
    }
  });
}

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

//--------------------------------------при скролле изменить header
const header = document.querySelector('.header');

let timeout;

window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    if (window.scrollY > 50) {
      header.classList.add('header_scrolled');
    } else {
      header.classList.remove('header_scrolled');
    }
  }, 250);
});