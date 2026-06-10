import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
  scrollActive: function () {
    let height = $("header").height();
    if ($(window).scrollTop() > height) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  },
  mobile: function () {
    // Hamburger toggle
    $(".header-hambuger").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("isOpenMenu");
      $(".header-mobile-nav").toggleClass("active");
    });

    // Mobile submenu toggles
    $(".header-mobile-toggle").on("click", function (e) {
      e.preventDefault();
      const submenu = $(this).siblings(".header-mobile-submenu");
      const icon = $(this).find(".fa-chevron-right");

      submenu.slideToggle(300);
      icon.toggleClass("rotate-90 transition-transform duration-300");
    });
  },
  initVariable: function () {
    const height = $("header").height();
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`,
    );
  },
  init: function () {
    headerSearch();
    header.scrollActive();
    header.mobile();
    header.initVariable();
  },
};
document.addEventListener(
  "scroll",
  function (e) {
    header.scrollActive();
  },
  true,
);
