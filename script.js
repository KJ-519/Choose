// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');


// html content elements
let choice1image = document.querySelector('.choice1image');
let text = document.querySelector('.text');

let choice1Aimage = document.querySelector('.choice1Aimage');
choice1Aimage.style.display ="none";




headButton.addEventListener('click', function() {
text.innerHTML = "Halfway during your freshman season, you suffer a year-ending injury. ";
choice1image.style.display = "none";
choice1Aimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
});

choice1Aimage.addEventListener('dblclick', function(){
    text.innerHTML = "You make it another day"
    choice1Aimage.src = "knockedout.jpg";
});

exploreButton.addEventListener('click', function() {
text.innerHTML = "After two successful years, you get injured during your junior year which decreases your draft stock."
choice2image.style.display = "none";
choice2Bimage.style.display ="none";
exploreButton.style.display="none";
headButton.style.display="none";
});