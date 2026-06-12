// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){
loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 500);
}

});

// Sticky Header

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});

// Counter Animation

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

const targetText = counter.innerText;

let target = parseInt(targetText);

if(isNaN(target)) return;

let current = 0;

const increment = target / 60;

const updateCounter = () => {

current += increment;

if(current < target){

counter.innerText = Math.floor(current) + "+";

requestAnimationFrame(updateCounter);

}else{

counter.innerText = targetText;

}

};

updateCounter();

};

const counterObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},
{
threshold: 0.5
}

);

counters.forEach(counter => {
counterObserver.observe(counter);
});

// Scroll Reveal

const revealElements = document.querySelectorAll(
".service-card, .stat-box, .client-grid div, .about-content, .glass-card"
);

revealElements.forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "all .8s ease";

});

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},
{
threshold: 0.15
}

);

revealElements.forEach(el => {
revealObserver.observe(el);
});

// Smooth Anchor Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior: "smooth"
});

}

});

});

// Mobile Menu Placeholder

const mobileBtn = document.querySelector(".mobile-menu");

if(mobileBtn){

mobileBtn.addEventListener("click", () => {

alert(
"Mobile menu can be expanded in the next version."
);

});

}
