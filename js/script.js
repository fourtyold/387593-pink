var menu = document.querySelector(".main-nav");
var menu_btn = menu.querySelector(".main-nav__toggle");

menu_btn.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav--closed");
})


/////////////////////////////////////////FORM SEND
var pink_form = document.querySelector(".offer__form");
