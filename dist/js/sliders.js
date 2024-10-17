
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
    autoplaySpeed: 300000,
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
  // On About & Career pages
  $(".group-pic-slider").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }); 



  var swiper = new Swiper(".image-slider1", {
      grabCursor: true,
      loop: true,
      effect: "fade",
      slidesPerView: 1,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
  });
  
  var swiper2 = new Swiper(".image-slider2", {
      grabCursor: true,
      loop: true,
      effect: "fade",
      slidesPerView: 1,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
  });


});

if ($(window).width() > 992) {
  // alert('More than 992');
}else{
  // alert('Less than 992');

  $(".awards-scroller-home").slick({
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      }
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  }); 
  
  $(".our-leaders .leadership-slider").slick({
    centerMode: false,    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

}



