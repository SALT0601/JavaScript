const title = document.querySelector(".hello h1");


title.innerText = "Hello";

function handleMouseEnter() {
    title.innerText = "The Mouse is here!";
    title.style.color = "#1abc9c";
}

function handleMouseLeave() {
    title.innerText = "The Mouse is gone!";
    title.style.color = "#3498db";
}

function handleWindowResize() {
    title.innerText = "You just resized!";
    title.style.color = "#9b59b6";
}

function handleRightClick() {
    title.innerText = "That was a right click!";
    title.style.color = "#e74c3c";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleRightClick);