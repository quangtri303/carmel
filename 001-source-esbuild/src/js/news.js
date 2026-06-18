export function tabNews() {
  const tabs = document.querySelectorAll(".news-category li");
  const contents = document.querySelectorAll(".news-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");

      document
        .querySelector(`[data-news="${tab.dataset.category}"]`)
        .classList.add("active");
    });
  });
}
