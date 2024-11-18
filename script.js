// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');

// html content elements
let choice1image = document.querySelector('.choice1image');
let text = document.querySelector('.text');

let choice1Aimage = document.querySelector('.choice1Aimage');
choice1Aimage.style.display ="none";

let choice2Bimage = document.querySelector('.choice2Bimage');
choice2Bimage.style.display ="none";

let Helicopter = document.querySelector('h2');
let h2 = document.querySelector('hide')
Helicopter.style.display = "none"


headButton.addEventListener('click', function() {
text.innerHTML = "Halfway during your freshman season, you suffer a year-ending injury. ";
choice1image.style.display = "none";
choice1Aimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
Helicopter.style.display="none"
});

choice1Aimage.addEventListener('dblclick', function(){
    text.innerHTML = "You go into rehab and prepare for a comeback in your junior year."
    choice1Aimage.src = "rehab.jpg";
});

exploreButton.addEventListener('click', function() {
choice2Bimage.style.display = "block";
text.innerHTML = "After two successful years, you get injured during your junior year which decreases your draft stock.";
choice1image.style.display = "none";
choice2image.style.display = "none";
exploreButton.style.display= "none";
headButton.style.display="none";
Helicopter.style.display="block"
});

Helicopter.addEventListener('mouseenter', function(){
    text.innerHTML = "You go into rehab and prepare for a comeback in your senior year."
    choice2Bimage.src = "injuredplayer2.jpg";
});