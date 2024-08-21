$(document).ready(function () {
  $(".home-pop-up-1").click(function () {
    $(".custom-model-main6").addClass("model-open6");
  });
  $(".close-btn6, .bg-overlay6").click(function () {
    $(".custom-model-main6").removeClass("model-open6");
  });

  $(".home-pop-up-2").click(function () {
    $(".custom-model-main7").addClass("model-open7");
  });
  $(".close-btn7, .bg-overlay7").click(function () {
    $(".custom-model-main7").removeClass("model-open7");
  });

  $(".home-pop-up-3").click(function () {
    $(".custom-model-main8").addClass("model-open8");
  });
  $(".close-btn8, .bg-overlay8").click(function () {
    $(".custom-model-main8").removeClass("model-open8");
  });

});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
});

window.addEventListener("load", function () {
  new Swiper("#Home-slider-verticle", {
    autoplay: {
      delay: 5000,
    },

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 1000,
  });
});

$(document).ready(function () {
  $(".slider-main-logos").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: false,
    centerMode: true,
    focusOnSelect: false,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
});

$(".acc-button").first().addClass("active");

$(".acc-button").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".accolian-items")
    .removeClass("active-content")
    .eq(position)
    .addClass("active-content");

  $siblings.removeClass("active-content");
  $this.addClass("active-content");
});

$(".acc-button1").first().addClass("active");

$(".acc-button1").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".accolian-items1")
    .removeClass("active-content1")
    .eq(position)
    .addClass("active-content1");

  $siblings.removeClass("active-content1");
  $this.addClass("active-content1");
});



$(document).ready(function () {
  // Start Tabs
  var tabTimeout;
  clearTimeout(tabTimeout);
  tabLoop();

  // Connect your class names to elements.
  function tabLoop() {
    tabTimeout = setTimeout(function () {
      var $first = $('.pr-tabs-menu .pr-tab-button:first')
      var $curr = $('.pr-tabs-menu').children('.w--current:first')
      var $next = $curr.next();
      console.log('slide_1', $first[0], $curr[0], $next[0], $next.length);
      if ($next.length) {
        $next[0].click();  // user click resets timeout
      } else {
        $first[0].click();  // click 1st tab
      }
    }, 500000);  // 5 Second Rotation
  }

  // Reset Loops
  $('.pr-tabs-menu .pr-tab-button').click(function () {
    clearTimeout(tabTimeout);
    tabLoop();
  });

});