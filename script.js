const shareBtn = document.querySelector(".share");
const links = document.querySelector(".links");
shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("highligh-btn");
    links.classList.toggle("show-tooltip");
});
