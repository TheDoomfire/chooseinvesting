//Made from this tutorial:
// https://www.youtube.com/watch?v=flItyHiDm7E&t=22s
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Trying to get the aria-expanded to toggle.
/* let el = document.getElementById('hamburger');
console.log(el.ariaExpanded); // false
el.ariaExpanded = "false";
console.log(el.ariaExpanded); // true */


//Trying to store current stock price.
let citycon = 6.94;
let cityconDividend = 0.5;
let cityconDividendYield = (cityconDividend / citycon) * 100 ;
let cityconAmountOfShares = 168008940;
let cityconEpraNav2020 = 2011800000;

let cityconNavDiscount = 1 - (citycon / ( cityconEpraNav2020 / cityconAmountOfShares ));

document.getElementById("citycon").innerHTML = citycon;

//Share Button
const shareButton = document.querySelector('.sharethis');
const overlay = document.querySelector('.overlay-fullscreen');
const shareModal = document.querySelector('.share');

const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener('click', () => {

  if (navigator.share) {
    navigator.share({
      title: `${title}`,
      url: `${url}`
    }).then(() => {
      console.log('Thanks for sharing!');
    }).catch(console.error);
  } else {
    overlay.classList.add("show-share");
    shareModal.classList.add("show-share");
  }
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-share');
  shareModal.classList.remove('show-share');
})

// jQuery and Underscore.js are dependencies
// Code from:
// https://codepen.io/j_holtslander/pen/dwrWOx
var pageWidth, pageHeight;
var basePage = {
  width: 826,
  height: 1066,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};
$(function(){
  var $page = $('.google-doc');
  getPageSize();
  scalePages($page, pageWidth, pageHeight);
  //using underscore to delay resize method till finished resizing window
  $(window).resize(_.debounce(function () {
    getPageSize();            
    scalePages($page, pageWidth, pageHeight);
  }, 150));
function getPageSize() {
  pageHeight = $('#google-doc-container').height();
  pageWidth = $('#google-doc-container').width();
}
function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;
  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));
  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}
});