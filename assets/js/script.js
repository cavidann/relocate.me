$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  // margin:0,
  items: 1,
  navText: [
    "<img src='assets/images/left.svg'>",
    "<img src='assets/images/right.svg'>",
  ],
});

$(".start-plan").click(function () {
    $(".airtable-embed").fadeIn(200);
    $(".start-plan").fadeOut(200);
});
