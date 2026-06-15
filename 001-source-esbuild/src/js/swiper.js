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
  new Swiper(".section-home-banner .swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
    },
    modules: [Pagination, Navigation, Autoplay, EffectFade],
    pagination: {
      el: ".section-home-banner .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        const slide = this.slides[index];
        // Pull data from attributes on the .swiper-slide
        const title = slide.getAttribute("data-title") || "";
        const icon = slide.getAttribute("data-icon") || "";

        // Return the exact structure from your hero-nav
        return `
            <div class="${className}">
                <i class="${icon} heading-1"></i>
                <div class="bullet-text">${title}</div>
            </div>
        `;
      },
    },
    navigation: {
      nextEl: ".section-home-banner .btn-next",
      prevEl: ".section-home-banner .btn-prev",
    },
  });
  new Swiper(".section-doctors .swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".section-doctors .btn-next",
      prevEl: ".section-doctors .btn-prev",
    },
    breakpoints: {
      640: {
        spaceBetween: 10,
        slidesPerView: 2, // Tablet
      },
      1024: {
        spaceBetween: 10,
        slidesPerView: 3, // Small Laptop
      },
      1280: {
        spaceBetween: 10,
        slidesPerView: 4, // Desktop (matching your image)
      },
    },
  });
}
