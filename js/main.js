"use strict";

// show menu, dont scroll body while menu is open, close the menu if click happen outside menu
const menuIcon = document.querySelector(".menu__icon");
const menuButton = document.querySelector(".catalog-btn");

// Burger-menu: show menu, dont scroll body while menu is open, close the menu if click outside menu
const burgerMenuIcon = document.querySelector(".burger-menu__icon");
const burgerMenuBody = document.querySelector(".header__nav");

document.addEventListener("click", function(event){
  if(event.target.closest('.burger-menu-btn')){
    document.body.classList.toggle("lock");
    burgerMenuBody.classList.toggle("_active");
    burgerMenuIcon.classList.toggle("_active");
  }
})

// Get all the dropdown from document

document.querySelectorAll(".dropdown-link").forEach(dropDownFunc);

// Dropdown Open and Close function
// Dropdown Open and Close function
function dropDownFunc(dropDown) {

  if(window.innerWidth > 900){
    if (dropDown.classList.contains("hover-dropdown") === true) {
      dropDown.onmouseover = dropDown.onmouseout = dropdownHover;
      
      function dropdownHover(e) {
        if (e.type == "mouseover" && !!this.nextElementSibling ) {
          // Close the opend dropdown
          closeDropdown();
          this.querySelector(".arrow_down").classList.remove("rotate");
  
          // add the open and active class(Opening the DropDown)
          this.parentElement.classList.add("dropdown-open");
          this.nextElementSibling.classList.add("dropdown-active");
          this.querySelector(".arrow_down").classList.add("rotate");
        }
      }
      
    }
} else {
    if (dropDown.classList.contains("dropdown-link") === true) {
      dropDown.addEventListener("click", function (e) {
        if (!!this.nextElementSibling &&
          this.nextElementSibling.classList.contains("dropdown-active") === true
        ) {
          // Close the clicked dropdown
          this.parentElement.classList.remove("dropdown-open");
          this.nextElementSibling.classList.remove("dropdown-active");

          closeDropdown();
        } else {
          // Close the opend dropdown
          closeDropdown();

          // add the open and active class(Opening the DropDown)
          this.parentElement.classList.add("dropdown-open");
          if (!!this.nextElementSibling) {
            this.nextElementSibling.classList.add("dropdown-active");
          }
        }
      });
    }
  }
}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest("#btn_mobile_menu_back")) {
    // Close the opend dropdown
    closeDropdown();
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document
    .querySelectorAll(".header__menu__list")
    .forEach(function (container) {
      container.classList.remove("dropdown-open");
    });

  document.querySelectorAll(".header__submenu__list").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });

  document.querySelector(".header__nav").style.paddingBottom = null;
  document.querySelector(".header__nav").style.marginBottom = null;
}

// close the dropdown on mouse out from the dropdown list
document
  .querySelectorAll(".header__submenu__list")
  .forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
  });

$(function () {

  // slider banner
  var owlBanner = $(".banner-carousel").owlCarousel({
    dots: true,
    loop: true,
    items: 1,
  });
  $(".slider-banner .next-slide").click(function () {
    owlBanner.trigger("next.owl.carousel");
  });
  $(".slider-banner .prev-slide").click(function () {
    owlBanner.trigger("prev.owl.carousel");
  });

  // slider categories
  var owlCategories = $(".categories-carousel").owlCarousel({
    dots: true,
    loop: true,
    margin: 30,
    autoWidth: true,
    items:1,
  });
  $(".slider-categories .next-slide").click(function () {
    console.log('next');
    owlCategories.trigger("next.owl.carousel");
  });
  $(".slider-categories .prev-slide").click(function () {
    console.log('prev');
    owlCategories.trigger("prev.owl.carousel");
  });

  //slider popular
  var owlPopular = $(".popular-carousel").owlCarousel({
    dots: true,
    loop: true,
    margin: 30,
    items:4,
  });
  $(".slider-popular .next-slide").click(function () {
    console.log('next');
    owlPopular.trigger("next.owl.carousel");
  });
  $(".slider-popular .prev-slide").click(function () {
    console.log('prev');
    owlPopular.trigger("prev.owl.carousel");
  });

  //slider new
  var owlNew = $(".new-carousel").owlCarousel({
    dots: true,
    loop: true,
    margin: 30,
    items:4,
  });
  $(".slider-new .next-slide").click(function () {
    console.log('next');
    owlNew.trigger("next.owl.carousel");
  });
  $(".slider-new .prev-slide").click(function () {
    console.log('prev');
    owlNew.trigger("prev.owl.carousel");
  });

  // slider advantages
  var owlAdvantages = $(".advantages-carousel").owlCarousel({
    dots: true,
    loop: true,
    autoWidth: true,
    items:1,
  });
  $(".slider-advantages .next-slide").click(function () {
    console.log('next');
    owlAdvantages.trigger("next.owl.carousel");
  });
  $(".slider-advantages .prev-slide").click(function () {
    console.log('prev');
    owlAdvantages.trigger("prev.owl.carousel");
  });


  // dropdown submenu
  $(".has-submenu > a").click(function(e){
    e.preventDefault()
    if(!$(this).siblings(".header__second-submenu__list").hasClass("open")){
      $(".has-submenu > a").removeClass("gray");
      $(this).addClass("gray");
      $(".header__second-submenu__list").removeClass("open").slideUp();
      $(this).siblings(".header__second-submenu__list").addClass("open").slideDown();
    } else {
      $(this).siblings(".header__second-submenu__list").removeClass("open").slideUp();
      $(this).removeClass("gray");
    }
  })

  //counting catalog items. if odd last item full width

  if($(".catalog__item").length % 2 != 0) {
    $(".catalog__item:last-child").addClass("full");
  }
});






