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
responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  },
]
});
