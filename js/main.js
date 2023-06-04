if ( window.location.pathname === '/' || '/heritageWebsite/' ){
    const header = document.querySelector('.headerNav'),
        main = document.querySelector('main'),
        limit = 950;  /* scrolltop value when header should be displayed */
    
    main.style.marginTop = 0
    main.style.backgroundColor = "white"
    main.style.color = "initial"
    header.style.opacity = 0
    window.addEventListener('scroll', (event) => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
        if (scrollTop >= limit) {
            header.style.opacity = 1
        } else {
            header.style.opacity = 0
        }
    })
    header.addEventListener('mouseover', () => {
        header.style.opacity = 1
    })
}



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
