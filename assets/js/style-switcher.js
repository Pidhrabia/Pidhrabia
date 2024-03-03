const styleSwitcherToggler = document.querySelector(".style-switcher-toggle");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", true);
        }
    })
}



// Theme Color

const dayNight = document.querySelector(".day-night")

dayNight.addEventListener("click", () => {
     dayNight.querySelector('i').classList.toggle("fa-sun");
    dayNight.querySelector('i').classList.toggle("fa-moon");
    document.body.classList.toggle("light");
})

window.addEventListener("load", () => {
    setActiveStyle('color-2');
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector('i').classList.add("fa-sun");
    } else {
        dayNight.querySelector('i').classList.add("fa-moon");
   }
});