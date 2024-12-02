// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');

// html content elements
let choice1image = document.querySelector('.choice1image');
let text = document.querySelector('.text');

let choice1Aimage = document.querySelector('.choice1Aimage');
choice1Aimage.style.display ="none";

let choice2Aimage = document.querySelector('.choice2Aimage');
choice2Aimage.style.display ="none";

let choice1Bimage = document.querySelector('.choice1Bimage');
choice1Bimage.style.display ="none";

let choice2Bimage = document.querySelector('choice2Bimage');
choice2Bimage.style.display = "none"

let Helicopter = document.querySelector('h2');
let h2 = document.querySelector('hide');
Helicopter.style.display = "none";

let Rocket = document.querySelector('h3');
let h3 = document.querySelector('hide');
Rocket.style.display = "none";

headButton.addEventListener('click', function() {
text.innerHTML = "Halfway during your freshman season, you suffer a year-ending injury. ";
choice1image.style.display = "none";
choice1Aimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
Helicopter.style.display="none";
choice2Aimage.style.display = "none";


});

choice1Aimage.addEventListener('dblclick', function(){
    text.innerHTML = "You go into rehab and prepare for a comeback in your junior year.";
    choice1Aimage.src = "rehab.jpg";
    headButton.style.display = "none";
    Helicopter.style.display = "block";
});

exploreButton.addEventListener('click', function() {
choice1Bimage.style.display = "block";
text.innerHTML = "After two successful years, you get injured during your junior year which decreases your draft stock.";
choice1image.style.display = "none";
exploreButton.style.display= "none";
headButton.style.display="none";
Helicopter.style.display="none";
});

Helicopter.addEventListener('mouseenter', function(){
    text.innerHTML = "Give up on your dream of playing basketball and focus on your education.";
    choice2Aimage.src = "collegestudent.jpg";
    choice2Aimage.style.display = "block";
    choice1Aimage.style.display = "none";
    Helicopter.style.display = "none";
});

choice1Bimage.addEventListener('dblclick', function(){
    text.innerHTML = "You go into rehab and prepare for a comeback in your junior year.";
    choice1Bimage.src = "rehab2.jpg";
    headButton.style.display = "none";
    Rocket.style.display = "block";
    choice1Bimage.style.display = "block"
});

Rocket.addEventListener('mouseenter', function(){
    text.innerHTML = "Become a coach and help other kids become great football players.";
    choice2Bimage.src = "coach.jpg";
    choice2Bimage.style.display = "block";
    choice1Aimage.style.display = "none";
    Rocket.style.display = "none";
});




