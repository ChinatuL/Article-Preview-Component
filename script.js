const shareBtn = document.querySelector(".share");
const links = document.querySelector(".links");
const nameSection = document.querySelector(".name-section");

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("highligh-btn");
    links.classList.toggle("show-tooltip");
    hideNameSection("(max-width: 1000px");
});

const hideNameSection = (media) => {
    if (media.matches) {
        nameSection.classList.toggle(".hide-name-section");
    }
};
