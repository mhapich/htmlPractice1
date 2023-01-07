// Write our JavaScript here
// alert("HELLO FROM APP.JS!");
var pics = [
    "pics/the-lucky-neko-2JcixB1Ky3I-unsplash.jpeg",
    "pics/cat2.jpeg",
    "pics/Cat3.webp",
    "pics/cat4.jpeg",
    "pics/cat5.jpeg",
    "pics/kitten.jpeg",
    "pics/cat7.jpeg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 7){
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
});