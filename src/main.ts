import "./style.css";
import "./rsvp";
import "flickity/css/flickity.css";
import Flickity from "flickity";

const makeSlider = (el: HTMLElement) => {
	let options: Flickity.Options = {};

	try {
		options = JSON.parse(el.dataset.slider ?? "{}");
	} catch (_) {
		// silence is golden
	}

	new Flickity(el, {
		imagesLoaded: true,
		wrapAround: true,
		pageDots: false,
		autoPlay: 3000,
		adaptiveHeight: true,
		resize: true,
		prevNextButtons: false,
		...options,
	});
};

window.addEventListener("load", () => {
	setTimeout(() => {
		const els = document.querySelectorAll("[data-slider]");
		[...els].filter((el) => el instanceof HTMLElement).map(makeSlider);
	}, 2000);
});
