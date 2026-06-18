import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, buttonToTop, menuSpy, stickElementToEdge } from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
$(document).ready(function () {
	setBackgroundElement();
	stickElementToEdge();
	menuSpy();
	buttonToTop();
	header.init();
	swiperInit();
    setTimeout(() => {AOS.refresh()}, 3000)
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
    duration: 1000,
    once:true,
    debounceDelay: 50,
    throttleDelay: 99,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

window.FE = {
	lozad: observer.observe,
}
