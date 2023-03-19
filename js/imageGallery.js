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