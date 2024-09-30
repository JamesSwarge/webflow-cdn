
$(document).ready(function () {
  // alert("slider.js");
  $(".about-team-slider-2").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".about-team-slider").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".home-sec2-slider").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 30000000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
  });
});
