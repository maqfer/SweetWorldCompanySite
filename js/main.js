/******/ (() => {
var __webpack_exports__ = {};
if (document.querySelector(".shop") !== null) {
  document.querySelector("#main").classList.add("active");
} else if (document.querySelector(".products") !== null) {
  document.querySelector("#shop").classList.add("active");
  const button = document.querySelectorAll(".products__button");
  button.forEach(element => {
    element.addEventListener("click", function () {
      button.forEach(e => {
        e.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
  document.querySelector(".button-content").addEventListener("click", function () {
    document.querySelectorAll(".card").forEach(e => {
      e.classList.remove("dnone");
      document.querySelector(".button-content").classList.add("dnone");
    });
  });
}
/******/ })()
;

