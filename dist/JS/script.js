$(function () {
  //NAVBAR START =========
  $(".toggle_btns").click(function () {
    $(".toggle_main_menu").slideToggle();
  });

  $(".toggle_btns").click(function () {
    $(".toggle_btn_1").slideToggle('100');
    $(".toggle_btn_2").slideToggle('100');
  });
  //NAVBAR END =========
  //TEAM START  =========
  $(".member_1").mouseenter(function () {
    $(".member_overlay").fadeIn("slow");
  });
  $(".member_1").mouseleave(function () {
    $(".member_overlay").fadeOut("slow");
  });
  // -
  $(".member_2").mouseenter(function () {
    $(".member_overlay_2").fadeIn("slow");
  });
  $(".member_2").mouseleave(function () {
    $(".member_overlay_2").fadeOut("slow");
  });
  // -
  $(".member_3").mouseenter(function () {
    $(".member_overlay_3").fadeIn("slow");
  });
  $(".member_3").mouseleave(function () {
    $(".member_overlay_3").fadeOut("slow");
  });
  // -
  $(".member_4").mouseenter(function () {
    $(".member_overlay_4").fadeIn("slow");
  });
  $(".member_4").mouseleave(function () {
    $(".member_overlay_4").fadeOut("slow");
  });
  //TEAM END =========
});

//STICKY NAVBAR START
let navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scroll_value = Math.floor(window.scrollY);

  if (scroll_value > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
let move_top = document.querySelector(".move_top");

window.addEventListener("scroll", function () {
  let scroll_value = Math.floor(window.scrollY);

  if (scroll_value > 100) {
    move_top.classList.add("show");
  } else {
    move_top.classList.remove("show");
  }
});
//STICKY NAVBAR END
