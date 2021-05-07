/* ====== SLIDER HANDLER ====== */

var slideId = 0;

// Dots slide control onlick handler
const currentSlide = (num) => showSlides(slideId = num);

// Next/Previous Slide change
const changeSlide = (num) => showSlides(slideId += num);

// Show specified Slide on screen
const showSlides = (num) => 
{
	let i;
	const slides = document.getElementsByClassName("slider-slide");
	const controls = document.getElementsByClassName("dots-menu__item");

	if(num >= slides.length) slideId = 0;
	if(num < 0) slideId = slides.length;

	// remove class from all dots
	for(i = 0; i < controls.length; i++)
	{
		controls[i].className = controls[i].className.replace(" current", "");
	}

	// Hide all elements
	for(i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";
	}

	// Show current selected slide and mark its control
	slides[slideId].style.display = "block";
	controls[slideId].className += " current";
} 

showSlides(slideId);


/* ===== NAVBAR SCRIPT ===== */

window.onscroll = () => navbarHandler();

const navbarHandler = () => {
	const navbar = document.getElementById("header");
	let navbarOffset = navbar.offsetTop;

	if(window.pageYOffset >= navbarOffset + 1) navbar.classList.add("sticky");
	else { navbar.classList.remove("sticky"); }
}

/* TODO: RESPONSIVE NAVABR HANDLER, POP-UP, GOOGLE MAP, MAIL HANDLER, FORM VALIDATOR */