//const { Chart } = require("react-chartjs-2");

//Made from this tutorial:

// https://www.youtube.com/watch?v=flItyHiDm7E&t=22s
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");
const header = document.querySelector(".main-header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//Only for the compound calculator
//Could be better to move this so it dosent run for every page
Window.onload = compounding();

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

//Trying to save data for use in nunjucks template
/* var nunjucks = require('nunjucks');
nunjucks.render(
  'components/show-movies.njk', {
    movies: [
    {
      title: "hello",
      year: "2001"
    },
    {
      title: "hello2",
      year: "2002"
    }
    ]
  }
) */

var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];

function separateNumber(x) {
  removeDecimals(x)
  return removedDecimals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

function removeDecimals(x) {
  return removedDecimals = Math.trunc(x)
}

/* document.addEventListener("DOMContentLoaded", function() {
  compounding();
}); */

/* function monthlyCompound(){
  CI = P(1 + (r/12) )12t - P
}; */


function compounding() {
  let inputCapital = parseInt(document.getElementById('capital').value);
  let inputSavings = parseInt(document.getElementById('savings').value);
  let inputYears = parseInt(document.getElementById('years').value);
  let inputReturns = parseInt(document.getElementById('returns').value);
  let tableBody = document.getElementById('tableData');

  document.getElementById("totalYears").innerHTML = inputYears

  var yearList = [];
  var compoundList = [];

  tableBody.innerHTML = "";
  for (let i = 1; i <= inputYears; i++) {
    compoundValue = Math.round((inputCapital) * Math.pow(inputReturns/100+1, i)) + (inputSavings*12) * (Math.pow(inputReturns/100+1, i) - 1)/(inputReturns/100);

    yearList.push(i + " y");
    compoundList.push(removeDecimals(compoundValue));


    tableBody.innerHTML += `<tr><td>${i}&nbsp;Year</td><td type="number">$${separateNumber(compoundValue)}</td></tr>`;

  };
  document.getElementById("totalCompound").innerHTML = "$" + separateNumber(compoundValue);
  document.getElementById("totalSavings").innerHTML = "$" + separateNumber(inputCapital + inputSavings * 12 * inputYears);
  document.getElementById("totalReturn").innerHTML = "$" + separateNumber(compoundValue - (inputCapital + inputSavings * 12 * inputYears));
  myCustomChart("line", yearList,compoundList);
  console.log(yearList, compoundList)
};

function myCustomChart(chartType, chartLabels, chartDataset) {

  const myChartData = {
    labels: chartLabels,
    datasets: [{
      label: 'Compound Rate',
      backgroundColor: 'rgb(0,128,0)',
      borderColor: 'rgb(50,128,50)',
      data: chartDataset,
    }]
  };

  const chartConfig = {
    type: chartType,
    data: myChartData,
    options: {
      legend: {
        display: false //Removes the Label.
     },
     tooltips: {
      callbacks: {
          label: function(tooltipItems, data) {
              return "$" + tooltipItems.yLabel.toString();
          }
}
    }}};

  const myChart = new Chart(
    document.getElementById('myChart'),
    chartConfig
  );

};