$(document).ready(function(){
  $('.slider').slick({
    autoplay: 3000,
    dots: true,
    arrows: true,
    infinite: true,
  });
});

$('.company-slider').slick({
autoplay: 2000,
swipeToSlide: true,
infinite: true,
speed: 1000,
slidesToShow: 5,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});