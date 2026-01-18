import "./style.css";
import "flickity/css/flickity.css";
import Flickity from "flickity";

const main = () => {
	const el = document.querySelector("[data-slider]") as HTMLElement | null;

	if (!el) return;

	new Flickity(el, {
		imagesLoaded: true,
		wrapAround: true,
		resize: true,
		pageDots: false,
		autoPlay: 3000,
		prevNextButtons: false,
		on: {
			ready: function () {
				el.dataset.slider = "initialized";
			},
		},
	});
};

main();
