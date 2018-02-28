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
    } else if (scrollTop < 65) {
      $("#navbar nav").removeClass("scrolled-nav");
    }
  });
});

// TOOLTIP
$(document).ready(function () {
    $(".tooltip").tooltipster({
        theme: "tooltipster-punk"
    });
});

// FADEIN
$(document).ready(function () {
  $(".social").fadeIn(2000, 'linear');
});

// TYPEDJS
// $(document).ready(function () {
  
// });
