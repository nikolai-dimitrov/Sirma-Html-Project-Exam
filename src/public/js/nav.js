const navIconElement = document.querySelector(".menu-icon-wrapper");
const navElement = document.querySelector("nav");
const navItemsContainerElement = document.querySelector(".nav-items-container");
const navBtnsContainerElement = document.querySelector(".nav-btns-container");

const openIconElement = document.querySelector(".menu-icon-wrapper .fa-bars");
const closeIconElement = document.querySelector(".menu-icon-wrapper .fa-x");

const mediaScreenResizeHandler = (e) => {
	console.log(e.target.innerWidth);
};

const navIconClickHandler = () => {
    // Change burger menu icon on click
	if (openIconElement.classList.contains("open-menu")) {
		openIconElement.classList.replace("open-menu", "close-menu");
		closeIconElement.classList.replace("close-menu", "open-menu");
	} else {
		openIconElement.classList.replace("close-menu", "open-menu");
		closeIconElement.classList.replace("open-menu", "close-menu");
	}
};

window.addEventListener("resize", mediaScreenResizeHandler);
navIconElement.addEventListener("click", navIconClickHandler);
