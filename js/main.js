jQuery(document).ready(function ($) {
    //FIXED HEADER
    window.onscroll = function () {
      if (window.pageYOffset > 140) {
        $("#header").addClass("sticky-top");
      } else {
        $("#header").removeClass("sticky-top");
      }
    }

    //ISOTOPO
    let btns = $("#servicos .button-group button")

    btns.click(function(e) {
      $("#servicos .button-group button").removeClass("active");
      e.target.classList.add("active");

      let selector = $(e.target).attr("data-filter");
      $("#servicos .grid").isotope({
        filter: selector,
      });
    });

  $(window).on("load", function() {
    $("#servicos .grid").isotope({
      filter: "*",
    })
  }) 

//header
  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tPrev: "Anterior",
      tNext: "Próxima",
      tCouter: "%Curr% de %total%",
    },
  })

  //OWL
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});