const root = document.documentElement;

// تغيير قيمة المتغير


let burgerMenu = document.querySelector(".burg");
let links = document.querySelector(".m");
let linksClose = document.querySelector(".m span");

burgerMenu.addEventListener("click", function () {
    links.classList.toggle("display");
})
linksClose.addEventListener("click", function () {
    links.classList.toggle("display");
})

let sun = document.querySelector(".toogleMode .colorToggleSun");
let moon = document.querySelector(".toogleMode .colorToggleMoon");

moon.addEventListener("click", function () {
    sun.classList.toggle("display");
    moon.classList.toggle("display");

    root.style.setProperty('--light-gray', '#393a3f'); //Dark Gray
    root.style.setProperty('--gray', '#232429'); //black
    root.style.setProperty('--dark-gray', '#d3d4d9');
    root.style.setProperty('--black', '#75767b');
    // --light-gray: #d3d4d9;
    // --gray: #75767b;
    // --dark-gray: #393a3f;
    // --black: #232429;
})
sun.addEventListener("click", function () {
    sun.classList.toggle("display");
    moon.classList.toggle("display");
    root.style.setProperty('--light-gray', '#d3d4d9'); //Dark Gray
    root.style.setProperty('--gray', '#75767b'); //black
    root.style.setProperty('--dark-gray', '#393a3f');
    root.style.setProperty('--black', '#232429');
})
let n = document.querySelector(".non")
let n1 = document.querySelector(".non1")

setTimeout(function () {
    n.style.top = "61px";
    n1.style.top = "57px";

}, 1000)
setTimeout(function () {
    n.style.top = "-1000px";
    n1.style.top = "-1000px";

}, 7000)