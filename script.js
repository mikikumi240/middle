var images = [];
var x=0;
images[0] = "images/rabbit.jpg";
images[1] = "images/hippo.jpg";
images[2] = "images/giraffe.jpg";
images[3] = "images/lamb.jpg";
images[4] = "images/monkey.jpg";
images[5] = "images/lion.jpg";

function changeImage() {
    setInterval(replaceAnimal, 3000);
}
function replaceAnimal() {
    
    if (x==images.length - 1)
        x=0;
    else
        x+=1;
    
    document.getElementById("to_replace").src = images[x];
    
}

function readMoreWhite(){
    
    document.getElementById("white1").color='blue';
    document.getElementById("white_1").src='images/blue_dots.png';
    
}