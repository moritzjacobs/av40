import "./style.css";
import "flickity/css/flickity.css";
import Flickity from "flickity";

let slider: Flickity | null = null;

const startSlider = (el: HTMLElement) => {
	if (slider) slider.destroy();

	slider = new Flickity(el, {
		imagesLoaded: true,
		wrapAround: true,
		pageDots: false,
		autoPlay: 3000,
		prevNextButtons: false,
	});
};

const init = () => {
	const el = document.querySelector("[data-slider]") as HTMLElement | null;
	if (!el) return;
	startSlider(el);

	window.addEventListener("resize", () => startSlider(el));
};

init();
