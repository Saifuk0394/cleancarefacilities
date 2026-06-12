window.addEventListener("load", function () {

const loader = document.getElementById("loader");

if (loader) {
    loader.style.display = "none";
}

});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

if (!header) return;

if (window.scrollY > 50) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}

});
