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

$(document).ready(function() {
  const $sliderTeam = $('.team-slider');
  const $sliderIndividual = $('.individual-slider');

  if ($sliderTeam.length) {
    $sliderTeam.on('click', '.team-slider__slide', function(e) {
      const index = $(this).data('index');
      $('.individual-slider').slick('slickGoTo', index);
      $sliderTeam.addClass('team-slider_hide');
      $sliderIndividual.removeClass('individual-slider_hide');
    });
  }

  if ($sliderIndividual.length) {
    $sliderIndividual.on('click', '.slide-close', function() {
      $sliderIndividual.addClass('individual-slider_hide');
      $sliderTeam.removeClass('team-slider_hide');
    });
  }
});
