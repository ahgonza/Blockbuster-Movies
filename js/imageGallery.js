//gallery code
var transformersGallery=["images/movie1Gallery/tGallery1.png", "images/movie1Gallery/tGallery2.png", "images/movie1Gallery/tGallery3.png"];
var m1Gallery = ["images/movie1Gallery/tGallery1.png", "images/movie1Gallery/tGallery2.jpg","images/movie1Gallery/tGallery3.jpg"]
var dotmGallery = [];
var tlkGallery=[];
var counter=0;
function newImage(gallery){
    var img = document.getElementById("img");
    counter++;
    if(counter>2){
        counter= 0;
    }
    img.src=gallery[counter];
}
function backImage(gallery){
    var img = document.getElementById("img");
    counter--;
    if(counter<0){
        counter= 2;
    }
    img.src=gallery[counter];
}
//summary code
function m1Sum(){
    var sumPopup = window.open("","","width=400,height=200,left=100,top=50");
    sumPopup.document.write("The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power. Only a human youth, Sam Witwicky (Shia LaBeouf) can save the world from total destruction.");
    return sumPopup;
}

document.getElementById("addToCart").addEventListener('click', function() {
    console.log("Test");
});