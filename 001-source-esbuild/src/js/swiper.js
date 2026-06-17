import Swiper from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

/**
 * @param swiperInit
 */

export function swiperInit() {
  $(".swiper-column-auto").each(function (index) {
    const $this = $(this);
    // Configuration flagsvideoSetting
    const config = {
      loop: $this.hasClass("swiper-loop"),
      touchMove: $this.hasClass("allow-touchMove") || true,
      mouseWheel: $this.hasClass("allow-mouseWheel")
        ? { forceToAxis: true }
        : false,
      autoHeight: $this.hasClass("auto-height"),
      hasVideo: $this.hasClass("auto-detect-video"),
      progressbar: $this.hasClass("progressbar"),
      time: $this.attr("data-time") || 3500,
      autoplay: $this.hasClass("autoplay"),
    };

    // Add unique identifier class
    $this.addClass(`swiper-column-auto-id-${index}`);

    // Create swiper with optimized options
    new Swiper(`.swiper-column-auto-id-${index} .swiper`, {
      modules: [Navigation, Pagination, Mousewheel],
      speed: 500,
      observer: true,
      observeParents: true,
      spaceBetween: 0,
      loop: config.loop,
      ...(config.autoplay && {
        autoplay: {
          delay: config.time,
        },
      }),
      slidesPerView: "auto",
      pagination: {
        el: `.swiper-column-auto-id-${index} .swiper-pagination`,
        clickable: true,
        ...(config.progressbar && {
          type: "progressbar",
        }),
      },
      mousewheel: config.mouseWheel,
      allowTouchMove: config.touchMove,
      navigation: {
        prevEl: `.swiper-column-auto-id-${index} .btn-prev`,
        nextEl: `.swiper-column-auto-id-${index} .btn-next`,
      },
      watchSlidesProgress: true,
      autoHeight: config.autoHeight,
      on: {
        init: function () {},
        slideChange: function () {},
      },
    });
  });
  new Swiper(".swiper-hero .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 50000,
    },
    modules: [Pagination, Navigation, Autoplay, EffectFade],
    pagination: {
      el: ".swiper-hero .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        const slide = this.slides[index];

        return `
            <div class="${className}"></div>
        `;
      },
    },
    navigation: {
      nextEl: ".swiper-hero .btn-next",
      prevEl: ".swiper-hero .btn-prev",
    },
  });
  new Swiper(".swiper-doctors .swiper", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-doctors .btn-next",
      prevEl: ".swiper-doctors .btn-prev",
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      640: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
    },
  });
  new Swiper(".swiper-news .swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 40,
    rewind: true,
    navigation: {
      nextEl: ".swiper-news .btn-next",
      prevEl: ".swiper-news .btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  new Swiper(".swiper-facility .swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-facility .btn-next",
      prevEl: ".swiper-facility .btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function () {
        const mainImg = document.getElementById("main-img");
        const thumbs = document.querySelectorAll(
          ".swiper-facility .facility-card img",
        );

        thumbs.forEach((img) => {
          img.addEventListener("click", function () {
            const newSrc = this.getAttribute("src");
            mainImg.style.opacity = "0";
            setTimeout(() => {
              mainImg.src = newSrc;
              mainImg.style.opacity = "1";
            }, 300); 
          });
        });
      },
    },
  });
  new Swiper(".swiper-specialties .swiper", {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 1,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-specialties .btn-next",
      prevEl: ".swiper-specialties .btn-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        grid: { rows: 2 },
      },
      1024: {
        slidesPerView: 3,
        grid: { rows: 2 },
      },
      1280: {
        slidesPerView: 4,
        grid: { rows: 2 },
      },
    },
  });

  new Swiper(".swiper-service .swiper", {
    modules: [Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      768: { slidesPerView: 4 },
      1200: {
        slidesPerView: 6,
        autoplay: false,
        loop: false,
        slideToClickedSlide: false,
      },
    },
    on: {
      slideChange: function () {
        const bgIndex = this.slides[this.activeIndex].dataset.index;

        document
          .querySelectorAll(".service-bg img")
          .forEach((img) => img.classList.remove("active"));

        document
          .getElementById(`service-bg-${bgIndex}`)
          ?.classList.add("active");
      },
    },
  });
}
document.querySelectorAll(".swiper-service .swiper-slide").forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    const bgIndex = slide.dataset.index;

    document
      .querySelectorAll(".service-bg img")
      .forEach((img) => img.classList.remove("active"));

    document.getElementById(`service-bg-${bgIndex}`)?.classList.add("active");
  });
});
