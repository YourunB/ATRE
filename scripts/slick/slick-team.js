$(document).ready(function(){
  $('.slider').slick({
    autoplay: 3000,
    dots: true,
    arrows: true,
    infinite: true,
  });
});

$('.team-slider').slick({
autoplay: 2000,
swipeToSlide: true,
infinite: true,
speed: 1000,
slidesToShow: 5,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

$(document).ready(function(){
  $('.slider').slick({
    autoplay: false,
    dots: true,
    arrows: true,
    infinite: true,
  });
});

$('.individual-slider').slick({
autoplay: false,
swipeToSlide: true,
infinite: true,
speed: 1000,
slidesToShow: 1,
slidesToScroll: 1,
});

const sliderTeam = document.querySelector('.team-slider');
const sliderIndividual = document.querySelector('.individual-slider');

if (sliderTeam) {
  sliderTeam.addEventListener('click', (e) => {
    $('.individual-slider').slick('slickGoTo', e.target.dataset.index);
    if (e.target.classList.contains('team-slider__slide')) {
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
