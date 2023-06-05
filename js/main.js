document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const indicator = document.querySelector('.introSplash_scrollIndicator');
let displayIndicator = () => {
    indicator.style.display = "flex"
}
window.setTimeout(displayIndicator, 2500)
indicator.addEventListener("mouseover", () => {
    indicator.style.transform += "scale(1.25)";
});
indicator.addEventListener("mouseout", () => {
    indicator.style.transform = "translateX(-50%)";
});
