var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var nasa_mars_img_array = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.png"];
var random_number = Math.floor(Math.random()*4);

var rover_width = 100;
var rover_height = 90;

//var background_image = "mars.jpg";
var background_image = nasa_mars_img_array[random_number];
console.log(background_image);
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

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log("When left arrow key is pressed, X = " + rover_x + " and Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y -= 10;
        console.log("When up arrow key is pressed, X = " + rover_x + " and Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x += 10;
        console.log("When right arrow key is pressed, X = " + rover_x + " and Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y += 10;
        console.log("When down arrow key is pressed, X = " + rover_x + " and Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}