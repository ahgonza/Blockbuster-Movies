//gallery code
var galleryMovies = {
    'Transformers (2007)': {
        name: "Transformers",
        synopsis: "The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power. Only a human youth, Sam Witwicky (Shia LaBeouf) can save the world from total destruction.",
        year: 2007, 
        rating: "7 out of 10",
        price: 1000000,
        image: "<img src='images/transformers200.jpg' height='200' width='150'>"
    }, 
    'Transformers: Dark of the Moon': {
        name: "Transformers: Dark of the Moon",
        synopsis: "Sam Witwicky (Shia LaBeouf) and his new girlfriend, Carly (Rosie Huntington-Whiteley), join the fray when the evil Decepticons renew their longstanding war against the Autobots. Optimus Prime (Peter Cullen) believes that resurrecting ancient Transformer Sentinel Prime (Leonard Nimoy), once the leader of the Autobots, may lead to victory. ",
        year: 2011,
        rating: "6.2 out of 10",
        price: 2000000,
        image: "<img src='images/transformers200.jpg' height='200' width='150'>"
    }, 
    'Transformers: The Last Knight': {
        name: "Transformers: The Last Knight",
        synopsis: "Humans are at war with the Transformers, and Optimus Prime is gone. The key to saving the future lies buried in the secrets of the past and the hidden history of Transformers on Earth. Now, it's up to the unlikely alliance of inventor Cade Yeager, Bumblebee, an English lord and an Oxford professor to save the world.",
        year: 2017,
        rating: "5.2 out of 10",
        price: 3000000,
        image: "<img src='images/transformers200.jpg' height='200' width='150'>"
}};
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
    sumPopup.document.write(galleryMovies["Transformers (2007)"].synopsis);
}

document.getElementById("addToCart").addEventListener('click', function() {
    var movieTitle = document.getElementById("movieTitle").textContent;
    const currentCartMovie = JSON.parse(localStorage.getItem(movieTitle));
    if (!currentCartMovie) {
        var cartMovie = {
            ...galleryMovies[movieTitle], 
            quantity: 1 };
    localStorage.setItem(movieTitle, JSON.stringify(cartMovie));
} else {
    var cartMovie = {
        ...galleryMovies[movieTitle], 
        quantity: currentCartMovie.quantity + 1 }
        console.log(cartMovie);
        localStorage.setItem(movieTitle,JSON.stringify(cartMovie));
}
    alert("added to cart!");
});