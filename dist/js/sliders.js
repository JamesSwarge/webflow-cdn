
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


});

if ($(window).width() > 992) {
  // alert('More than 992');
}else{
  // alert('Less than 992');
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


$(document).ready(function() {
  let lastScrollTop = 0; // Stores the last scroll position
  let nav = $('.pr-main-nav'); // Replace '.navigation' with your navigation class or ID

  $(window).scroll(function() {
      let currentScroll = $(this).scrollTop(); // Get the current scroll position

      // Check if we've scrolled to the top of the page
      if (currentScroll === 0) {
          nav.fadeOut(); // Hide navigation at the top of the page
      } else {
          nav.fadeIn(); // Show navigation when scrolling

          if (currentScroll > lastScrollTop) {
              // If scrolling down
              nav.removeClass('nav-up').addClass('nav-down');
          } else {
              // If scrolling up
              nav.removeClass('nav-down').addClass('nav-up');
          }
      }

      lastScrollTop = currentScroll; // Update the last scroll position
  });
});
