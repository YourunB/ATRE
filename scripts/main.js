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


//----------------------------------------модальное окно

const personalDescription = [
  `
    <div><img src="assets/images/photo-1.png" alt="АТРЭ" class="modal__img"></div>
    <div class="modal-content">
      <div class="modal-content__header">
        <h3>Владислав Онищенко</h3>
        <p>Генеральный директор</p>
      </div>
      <div class="modal-content__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id felis vel nulla facilisis rutrum. Duis aliquam nulla nibh, ac dapibus enim cursus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nibh orci, luctus non rhoncus id, fringilla consectetur orci. Aliquam mi magna, auctor id est sit amet, molestie porttitor enim. Praesent id tincidunt libero. Vivamus eleifend nisi sem. Sed fringilla ligula ac diam feugiat, at fringilla quam rhoncus. Praesent sit amet ipsum quis mi rhoncus dignissim in a nibh. Etiam mattis, nisi nec pretium molestie, leo libero pellentesque lectus, at aliquam lorem dui in quam.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum. Fusce purus massa, elementum sit amet tristique sed, dapibus vulputate sapien. Nam eros purus, sagittis ac accumsan vel, rhoncus sagittis dolor. Maecenas fermentum iaculis efficitur. Curabitur sit amet vehicula ipsum. Donec nec pretium urna. Vivamus imperdiet laoreet egestas. Nullam consectetur ex vitae lacinia convallis. Fusce auctor felis lacus, in rhoncus sapien vehicula sit amet. Aenean ac turpis nisl. Quisque vel sapien ligula.</p>
        <p>Aliquam quis dui molestie, tempor lectus at, scelerisque urna. Integer scelerisque leo ac malesuada tincidunt. Vestibulum ut libero sapien. Mauris cursus enim at augue mollis, in facilisis risus faucibus. Integer lobortis laoreet nulla eu dignissim. In hac habitasse platea dictumst. Aliquam justo nibh, vehicula a tortor a, varius lobortis risus. In rhoncus lacus et tincidunt scelerisque. Curabitur nec eros et felis suscipit lacinia. Integer non est augue. Fusce augue nibh, dignissim sit amet orci ut, maximus tempus arcu. Phasellus elementum magna nunc, sit amet sagittis est volutpat ut. Morbi eget dictum ligula, sed mollis lorem. Ut in nisi sed lorem hendrerit volutpat ac ullamcorper tellus. Cras id imperdiet velit. Nullam pellentesque, purus varius faucibus commodo, justo tortor dapibus lorem, nec vestibulum massa turpis at massa.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum.</p>
      </div>
    </div>
  `,

  `
    <div><img src="assets/images/photo-2.png" alt="АТРЭ" class="modal__img"></div>
    <div class="modal-content">
      <div class="modal-content__header">
        <h3>Ксения Банникова</h3>
        <p>Партнер по направлению аналитики рынков и ВЭД</p>
      </div>
      <div class="modal-content__main">
        <p>Имеет многолетний опыт проведения исследований в областях внешнеэкономической деятельности, анализа рынков, конкуренции.</p>
        <p>Ключевые компетенции: анализ внешнеэкономической деятельности, барьеров для экспорта, анализ состояния конкуренции на рынках, маркетинговые исследования рынков, анализ эффектов регулирования на состояние отраслевых рынков, работа с большими данными (для целей статистики, анализа рынков и эффектов регулирования на рынки продукции), анализ реализации Целей устойчивого развития в России и в ЕАЭС (с учетом интеграционных процессов), руководство исследовательскими проектами, проведение экспертных мероприятий.</p>
        <p>2012-2019 годы – занимала различные позиции в Институте анализа предприятий и рынков НИУ «Высшая школа экономики», в том числе с 2016 года – эксперт.</p>
        <p>2014-2020 годы – работала в различных должностях в Аналитическом центре при Правительстве Российской Федерации, в том числе в 2016-2017 годах являлась заместителем начальника управления по конкурентной политике, с 2017 года – начальником управления по внешнеэкономической деятельности.</p>
        <p>2020-2023 годы – директор центра экономики несырьевого сектора Фонда «Центр стратегических разработок».</p>
        <p>В 2023 году стала партнером по направлению аналитики рынков и внешнеэкономической деятельности АТРЭ.</p>
        <p>С отличием окончила бакалавриат факультета экономики НИУ «Высшая школа экономики». Получила степень магистра в Международном институте экономики и финансов НИУ «Высшая школа экономики» (программа «Финансовая экономика» при поддержке Лондонской школы экономики и политических наук).</p>
      </div>
    </div>
  `,

  `
    <div><img src="assets/images/photo-3.png" alt="АТРЭ" class="modal__img"></div>
    <div class="modal-content">
      <div class="modal-content__header">
        <h3>Виктория Павлюшина</h3>
        <p>Партнер, руководитель группы социально-экономических исследований</p>
      </div>
      <div class="modal-content__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id felis vel nulla facilisis rutrum. Duis aliquam nulla nibh, ac dapibus enim cursus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nibh orci, luctus non rhoncus id, fringilla consectetur orci. Aliquam mi magna, auctor id est sit amet, molestie porttitor enim. Praesent id tincidunt libero. Vivamus eleifend nisi sem. Sed fringilla ligula ac diam feugiat, at fringilla quam rhoncus. Praesent sit amet ipsum quis mi rhoncus dignissim in a nibh. Etiam mattis, nisi nec pretium molestie, leo libero pellentesque lectus, at aliquam lorem dui in quam.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum. Fusce purus massa, elementum sit amet tristique sed, dapibus vulputate sapien. Nam eros purus, sagittis ac accumsan vel, rhoncus sagittis dolor. Maecenas fermentum iaculis efficitur. Curabitur sit amet vehicula ipsum. Donec nec pretium urna. Vivamus imperdiet laoreet egestas. Nullam consectetur ex vitae lacinia convallis. Fusce auctor felis lacus, in rhoncus sapien vehicula sit amet. Aenean ac turpis nisl. Quisque vel sapien ligula.</p>
        <p>Aliquam quis dui molestie, tempor lectus at, scelerisque urna. Integer scelerisque leo ac malesuada tincidunt. Vestibulum ut libero sapien. Mauris cursus enim at augue mollis, in facilisis risus faucibus. Integer lobortis laoreet nulla eu dignissim. In hac habitasse platea dictumst. Aliquam justo nibh, vehicula a tortor a, varius lobortis risus. In rhoncus lacus et tincidunt scelerisque. Curabitur nec eros et felis suscipit lacinia. Integer non est augue. Fusce augue nibh, dignissim sit amet orci ut, maximus tempus arcu. Phasellus elementum magna nunc, sit amet sagittis est volutpat ut. Morbi eget dictum ligula, sed mollis lorem. Ut in nisi sed lorem hendrerit volutpat ac ullamcorper tellus. Cras id imperdiet velit. Nullam pellentesque, purus varius faucibus commodo, justo tortor dapibus lorem, nec vestibulum massa turpis at massa.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum.</p>
      </div>
    </div>
  `,

  `
    <div><img src="assets/images/photo-4.png" alt="АТРЭ" class="modal__img"></div>
    <div class="modal-content">
      <div class="modal-content__header">
        <h3>Диана Каплинская</h3>
        <p>Партнер по направлению "Отраслевые рынки"</p>
      </div>
      <div class="modal-content__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id felis vel nulla facilisis rutrum. Duis aliquam nulla nibh, ac dapibus enim cursus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nibh orci, luctus non rhoncus id, fringilla consectetur orci. Aliquam mi magna, auctor id est sit amet, molestie porttitor enim. Praesent id tincidunt libero. Vivamus eleifend nisi sem. Sed fringilla ligula ac diam feugiat, at fringilla quam rhoncus. Praesent sit amet ipsum quis mi rhoncus dignissim in a nibh. Etiam mattis, nisi nec pretium molestie, leo libero pellentesque lectus, at aliquam lorem dui in quam.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum. Fusce purus massa, elementum sit amet tristique sed, dapibus vulputate sapien. Nam eros purus, sagittis ac accumsan vel, rhoncus sagittis dolor. Maecenas fermentum iaculis efficitur. Curabitur sit amet vehicula ipsum. Donec nec pretium urna. Vivamus imperdiet laoreet egestas. Nullam consectetur ex vitae lacinia convallis. Fusce auctor felis lacus, in rhoncus sapien vehicula sit amet. Aenean ac turpis nisl. Quisque vel sapien ligula.</p>
        <p>Aliquam quis dui molestie, tempor lectus at, scelerisque urna. Integer scelerisque leo ac malesuada tincidunt. Vestibulum ut libero sapien. Mauris cursus enim at augue mollis, in facilisis risus faucibus. Integer lobortis laoreet nulla eu dignissim. In hac habitasse platea dictumst. Aliquam justo nibh, vehicula a tortor a, varius lobortis risus. In rhoncus lacus et tincidunt scelerisque. Curabitur nec eros et felis suscipit lacinia. Integer non est augue. Fusce augue nibh, dignissim sit amet orci ut, maximus tempus arcu. Phasellus elementum magna nunc, sit amet sagittis est volutpat ut. Morbi eget dictum ligula, sed mollis lorem. Ut in nisi sed lorem hendrerit volutpat ac ullamcorper tellus. Cras id imperdiet velit. Nullam pellentesque, purus varius faucibus commodo, justo tortor dapibus lorem, nec vestibulum massa turpis at massa.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum.</p>
      </div>
    </div>
  `,

  `
    <div><img src="assets/images/photo-5.png" alt="АТРЭ" class="modal__img"></div>
    <div class="modal-content">
      <div class="modal-content__header">
        <h3>Елена Ковалёва</h3>
        <p>Партнер по анализу рынков, платформенной экономике, конкурентной и регуляторной политике</p>
      </div>
      <div class="modal-content__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id felis vel nulla facilisis rutrum. Duis aliquam nulla nibh, ac dapibus enim cursus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nibh orci, luctus non rhoncus id, fringilla consectetur orci. Aliquam mi magna, auctor id est sit amet, molestie porttitor enim. Praesent id tincidunt libero. Vivamus eleifend nisi sem. Sed fringilla ligula ac diam feugiat, at fringilla quam rhoncus. Praesent sit amet ipsum quis mi rhoncus dignissim in a nibh. Etiam mattis, nisi nec pretium molestie, leo libero pellentesque lectus, at aliquam lorem dui in quam.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum. Fusce purus massa, elementum sit amet tristique sed, dapibus vulputate sapien. Nam eros purus, sagittis ac accumsan vel, rhoncus sagittis dolor. Maecenas fermentum iaculis efficitur. Curabitur sit amet vehicula ipsum. Donec nec pretium urna. Vivamus imperdiet laoreet egestas. Nullam consectetur ex vitae lacinia convallis. Fusce auctor felis lacus, in rhoncus sapien vehicula sit amet. Aenean ac turpis nisl. Quisque vel sapien ligula.</p>
        <p>Aliquam quis dui molestie, tempor lectus at, scelerisque urna. Integer scelerisque leo ac malesuada tincidunt. Vestibulum ut libero sapien. Mauris cursus enim at augue mollis, in facilisis risus faucibus. Integer lobortis laoreet nulla eu dignissim. In hac habitasse platea dictumst. Aliquam justo nibh, vehicula a tortor a, varius lobortis risus. In rhoncus lacus et tincidunt scelerisque. Curabitur nec eros et felis suscipit lacinia. Integer non est augue. Fusce augue nibh, dignissim sit amet orci ut, maximus tempus arcu. Phasellus elementum magna nunc, sit amet sagittis est volutpat ut. Morbi eget dictum ligula, sed mollis lorem. Ut in nisi sed lorem hendrerit volutpat ac ullamcorper tellus. Cras id imperdiet velit. Nullam pellentesque, purus varius faucibus commodo, justo tortor dapibus lorem, nec vestibulum massa turpis at massa.</p>
        <p>Proin nec sagittis augue, nec rhoncus turpis. Duis ultricies tristique ipsum, at suscipit libero luctus sed. Cras ut urna ut ante malesuada dignissim. Maecenas placerat ex at magna tristique condimentum.</p>
      </div>
    </div>
  `,
]

const sliderTeam = document.querySelector('.team-slider');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal-wrapper');
const btnCloseModal = document.querySelector('.modal-close');

if (sliderTeam) {
  sliderTeam.addEventListener('click', (e) => {
    if (e.target.classList.contains('team-slider__slide__img')) {
      modal.innerHTML = personalDescription[e.target.dataset.index];
      overlay.classList.add('overlay_show');
      document.body.classList.add('scroll-off');
    }
  });
}

if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) closeModal();
  })
}

btnCloseModal.addEventListener('click', () => {
  closeModal();
})

const closeModal = () => {
  const width = document.body.getBoundingClientRect().width;
  overlay.classList.remove('overlay_show');
  if (width <= 992 && !btnOpenMenu.classList.contains('btn-menu_hide')) document.body.classList.remove('scroll-off');
  if (width > 992) document.body.classList.remove('scroll-off');
}

//----------------------------------контроль скролла
window.addEventListener('resize', () => {
  const width = document.body.getBoundingClientRect().width;
  if (width > 992 && !overlay.classList.contains('overlay_show')) document.body.classList.remove('scroll-off');
  if (width <= 992 && btnOpenMenu.classList.contains('btn-menu_hide')) document.body.classList.add('scroll-off');
})
