var root = document.querySelector(":root");
var rootStyles = getComputedStyle(root);
var shopHeight = 0;
var screenWidth = 0;

setInterval(function() {
    root.style.setProperty("--screenWidth", window.innerWidth);
    screenWidth = window.innerWidth;
    shopHeight = screenWidth / 4 * 2.5;
}, 100);


var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 5000);

var counterCleanser = 1;
setInterval(function() {
    document.getElementById('radio-cleanser' + counterCleanser).checked = true;
    counterCleanser++;
    if(counterCleanser > 3) {
        counterCleanser = 1;
    }
}, 5000);

var counterRadiant = 1;
setInterval(function() {
    document.getElementById('radio-radiant' + counterRadiant).checked = true;
    counterRadiant++;
    if(counterRadiant > 3) {
        counterRadiant = 1;
    }
}, 5000);

var counterAiry = 1;
setInterval(function() {
    document.getElementById('radio-airy' + counterAiry).checked = true;
    counterAiry++;
    if(counterAiry > 3) {
        counterAiry = 1;
    }
}, 5000);

var counterCreme = 1;
setInterval(function() {
    document.getElementById('radio-creme' + counterCreme).checked = true;
    counterCreme++;
    if(counterCreme > 3) {
        counterCreme = 1;
    }
}, 5000);

function scrollToShop() {
    window.scrollTo(0, shopHeight + 32);
}

function scrollToCatalogue() {
    window.scrollTo(0,shopHeight + 155 + 187.5 * 2)
}