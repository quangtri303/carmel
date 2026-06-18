export function tabFacility() {
  const tabs = document.querySelectorAll(".facility-tabs > div");
  const contents = document.querySelectorAll(".facility-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach((c) => c.classList.remove("active"));

      const target = document.querySelector(`[data-img="${tab.dataset.category}"]`);
      if (target) {
        target.classList.add("active");
        
        const swiperEl = target.querySelector('.swiper').swiper;
        if (swiperEl) {
            swiperEl.update();
        }
      }
    });
  });
}
