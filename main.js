var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;

var background_image = "mars.jpg";
var rover_image = "rover.png";

var rover_x = 10;
var rover_y = 10;

var background_imageTag, rover_imageTag;

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRover;
    rover_imageTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}

addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == 37) {
        left();
        console.log("left");
    }

    if (keyPressed == 38) {
        up();
        console.log("up");
    }

    if (keyPressed == 39) {
        right();
        console.log("right");
    }

    if (keyPressed == 40) {
        down();
        console.log("down");
    }
}