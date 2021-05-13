/* ===== NAVBAR SCRIPT ===== */

window.onscroll = () => navbarHandler();
// get require elements from document
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

// handle click event for responsive menu (toggle class active)
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("activated");
});

// check navbar position, when it's offset then add sticky class
const navbarHandler = () => {
  const navbar = document.getElementById("header");
  let navbarOffset = navbar.offsetTop;

  if (window.pageYOffset >= navbarOffset + 1) navbar.classList.add("sticky");
  else {
    navbar.classList.remove("sticky");
  }
};

/* ====== SLIDER HANDLER ====== */

var slideId = 0;

// Dots slide control onlick handler
const currentSlide = (num) => showSlides((slideId = num));

// Next/Previous Slide change
const changeSlide = (num) => showSlides((slideId += num));

// Show specified Slide on screen
const showSlides = (num) => {
  let i;
  const slides = document.getElementsByClassName("slider-slide");
  const controls = document.getElementsByClassName("dots-menu__item");

  if (num >= slides.length) slideId = 0;
  if (num < 0) slideId = slides.length - 1;

  // remove class from all dots
  for (i = 0; i < controls.length; i++) {
    controls[i].className = controls[i].className.replace(" current", "");
  }

  // Hide all elements
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show current selected slide and mark its control
  slides[slideId].style.display = "block";
  controls[slideId].className += " current";
};

showSlides(slideId);

/* ===== POPUP SCRIPT ===== */

const togglePopup = () => {
  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
};

/* ===== GOOGLE MAPS ===== */

// Initialize and add the map
function initMap() {
  // The location for map center
  const location = { lat: 52.3992916, lng: 16.9047494 };

  // The map center at selected location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location,
    disableDefaultUI: true,
  });

  // The marker, positioned at glogowska
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: "http://tageater.atwebpages.com/dist/images/marker.png",
  });
}

initMap();