(function ($) {
  "use strict";

  /* ......Carrusel.... */

  $("#slides").superslides({
    inherit_width_from: ".cover-slides",
    inherit_height_from: ".cover-slides",
    play: 5000,
    animation: "fade",
  });

  $(".cover-slides ul li").append("<div class='overlay-background'></div>");

  /* ............Menu Estatico................... */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".top-header").addClass("fixed-menu");
    } else {
      $(".top-header").removeClass("fixed-menu");
    }
  });
})(jQuery);
