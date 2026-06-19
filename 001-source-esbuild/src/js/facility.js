import Swiper from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

export function swiperFacility() {
  const facilityThumb = new Swiper(".swiper-thumb-facilities", {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: '.facility-content[data-category="facilities"] .btn-next',
      prevEl: '.facility-content[data-category="facilities"] .btn-prev',
    },
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });

  const facilityMain = new Swiper(".swiper-main-facilities", {
    modules: [EffectFade, Thumbs],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: facilityThumb,
    },
  });

  const equipmentThumb = new Swiper(".swiper-thumb-equipments", {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: '.facility-content[data-category="equipments"] .btn-next',
      prevEl: '.facility-content[data-category="equipments"] .btn-prev',
    },
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });

  const equipmentMain = new Swiper(".swiper-main-equipments", {
    modules: [EffectFade, Thumbs],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: equipmentThumb,
    },
  });

  facilityThumb.on("slideChange", () => {
  facilityMain.slideTo(facilityThumb.activeIndex);
});

equipmentThumb.on("slideChange", () => {
  equipmentMain.slideTo(equipmentThumb.activeIndex);
});

  const tabs = document.querySelectorAll(".facility-tabs > div");
  const mains = document.querySelectorAll(".main-content");
  const thumbs = document.querySelectorAll(".facility-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      mains.forEach((m) => m.classList.remove("active"));
      thumbs.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      document
        .querySelector(`.main-content[data-category="${tab.dataset.category}"]`)
        .classList.add("active");

      document
        .querySelector(
          `.facility-content[data-category="${tab.dataset.category}"]`,
        )
        .classList.add("active");

      document
        .querySelector(
          `.main-content[data-category="${tab.dataset.category}"] .swiper`,
        )
        .swiper.update();

      document
        .querySelector(
          `.facility-content[data-category="${tab.dataset.category}"] .swiper`,
        )
        .swiper.update();
    });
  });
}
