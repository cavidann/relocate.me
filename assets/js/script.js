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

$(".hires-sc .skill-list .skill-item").click(function () {
  activeSkillIndex = $(".hires-sc .skill-list .skill-item").index(this);
  stopSlideSkillData();

  let _this = $(this);
  let _spesificData = $(this).find(".custom-tooltip");

  $(".hires-sc .skill-item").removeClass("selected");
  _this.addClass("selected");

  $(".active-skill-data img.linktree").attr(
    "src",
    _spesificData.find(".tooltip-img").attr("src")
  );
  $(".active-skill-data .p2--medium").text(
    _spesificData.find(".p2--medium").text()
  );
  $(".active-skill-data .p3--medium span").text(
    _spesificData.find(".p3--medium").text()
  );

  startSlideSkillData();
});

let skills = $(".hires-sc .skill-list .skill-item");
activeSkillIndex = 0;
let defaultSkilTimer;
let isScrollRichedHires = false;

let scrollTimer;

$(window).scroll(function () {
  if ($(window).scrollTop() >= $(".hires-sc").offset().top + $(".hires-sc").outerHeight() - window.innerHeight &&
  $(window).scrollTop() <= $(".hires-sc").offset().top+$(".hires-sc").outerHeight()+$(".hires-sc").outerHeight() - window.innerHeight) {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isScrollRichedHires = true;
      startSlideSkillData();
    }, 300);
  } else {
    isScrollRichedHires = false;
    stopSlideSkillData();
  }
});

function startSlideSkillData() {
  if(isScrollRichedHires){
    clearInterval(defaultSkilTimer);
    defaultSkilTimer = setInterval(() => {
      skills[activeSkillIndex].click();
      if (activeSkillIndex < skills.length - 1) {
        activeSkillIndex++;
      } else {
        activeSkillIndex = 0;
      }
    }, 3000);
  } else{
    stopSlideSkillData()
  }
}

function stopSlideSkillData(){
  clearInterval(defaultSkilTimer);
}