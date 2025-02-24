const navIconElement = document.querySelector(".menu-icon-wrapper");
const navElement = document.querySelector("nav");
const navItemsContainerElement = document.querySelector(".nav-items-container");
const navBtnsContainerElement = document.querySelector(".nav-btns-container");

const openIconElement = document.querySelector(".menu-icon-wrapper .fa-bars");
const closeIconElement = document.querySelector(".menu-icon-wrapper .fa-x");

const mobileScreensMediaQuery = window.matchMedia("(max-width: 860px)");
const mediaScreenResizeHandler = (e) => {
    // change burger menu's close icon to open icon when media screen changes
	if (closeIconElement.classList.contains("open-menu")) {
		closeIconElement.classList.replace("open-menu", "close-menu");
		openIconElement.classList.replace("close-menu", "open-menu");
	}
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

mobileScreensMediaQuery.addEventListener("change", mediaScreenResizeHandler);
navIconElement.addEventListener("click", navIconClickHandler);
