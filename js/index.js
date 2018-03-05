// SMALL SCREEN NAVIGATION
$(document).ready(function() {
  $(".button a").click(function() {
    $(".overlay").fadeToggle(350);
    $(this)
      .toggleClass("btn-open")
      .toggleClass("btn-close");
  });
  $(".overlay").on("click", function() {
    $(".overlay").fadeToggle(350);
    $(".button a")
      .toggleClass("btn-open")
      .toggleClass("btn-close");
    open = false;
  });
});

// NAVBAR
$(document).ready(function() {
  var scrollTop = 0;
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();
    // $(".counter").html(scrollTop);

    if (scrollTop >= 64) {
      $("#navbar nav").addClass("scrolled-nav");
      $("#nav ul li a").addClass("scrolled-nav-a");
    } else if (scrollTop < 65) {
      $("#navbar nav").removeClass("scrolled-nav");
      $("#nav ul li a").removeClass("scrolled-nav-a");
    }
  });
});

// TOOLTIP
$(document).ready(function () {
    $(".tooltip").tooltipster({
        theme: 'punk',
        side: ['bottom', 'top', 'left', 'right'],
        animation: 'grow',
        animationDuration: 350
    });
});

// FADEIN
$(document).ready(function () {
  $(".social").fadeIn(3000, 'linear');
});

// TYPEDJS
// $(document).ready(function () {
//   var options = {
//     strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//     typeSpeed: 40
//   }
  
//   var typed = new Typed(".home-hero-text", options);
// });
