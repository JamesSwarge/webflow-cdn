
$(document).ready(function () {
  // alert("slider.js");

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $(".pr-header").addClass("sticky");
  //   } else {
  //     $(".pr-header").removeClass("sticky");
  //   }
  // });

  $(".home-sec2-slider").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    fade: true,
  });
  
  // Homepage
  $(".hero-logos").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
    swipeToSlide: false,
    centerMode: true,
    focusOnSelect: false,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".pr-home-sec-10 .awards-scroller").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });  

  // On About & Career pages
  $(".group-pic-slider").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true
  });

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





});
