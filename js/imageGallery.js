/*
var dotmGallery = [];
var tlkGallery=[];

function newImg(gallery) {
    for(let i = 0; i<gallery.length;i++){
        document.getElementById(img).src=gallery[i];
    }
}
function backImg(gallery){
    for(let i = gallery.length; i>0;i--){
        document.getElementById(img).src=gallery[i];
    }
}
old code*/ 
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