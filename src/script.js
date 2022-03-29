//Made from this tutorial:
// https://www.youtube.com/watch?v=flItyHiDm7E&t=22s
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


//Trying to store current stock price.
let citycon = 6.94;
let cityconDividend = 0.5;
let cityconDividendYield = (cityconDividend / citycon) * 100 ;
let cityconAmountOfShares = 168008940;
let cityconEpraNav2020 = 2011800000;

let cityconNavDiscount = 1 - (citycon / ( cityconEpraNav2020 / cityconAmountOfShares ));

document.getElementById("citycon").innerHTML = citycon;
