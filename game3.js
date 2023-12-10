const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const increaseButton = document.getElementById('increase-speed');
const decreaseButton = document.getElementById('decrease-speed');


const playerImage = new Image();

playerImage.src = 'baseball.jpeg';

let x = 0;
let y = 0;
let directionX = 1; // 1 for right, -1 for left
let directionY = 1; // 1 for down, -1 for up

let speedX = 2; // adjust this to change the speed in the x direction
let speedY = 2; // adjust this to change the speed in the y direction

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, x, y, 60, 50);

    x += directionX * speedX;
    y += directionY * speedY;
    if (x >= CANVAS_WIDTH - 60 || x <= 0) { // 60 is the width of the image
        speedX = 0;
        speedY = 0;
        // x= 500;
        // y= 500;
        directionX *= -1;
    }
    if (y >= CANVAS_HEIGHT - 50 || y <= 0) { // 50 is the height of the image
        directionY *= -1;
    }

    //This is the text at the top of the screen that shows the x and y coordinates of the ball
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`x: ${x}, y: ${y}, speedX: ${speedX}, speedY: ${speedY}`, 10, 30); 

    requestAnimationFrame(animate);
};

animate();

increaseButton.addEventListener('click', function() {
    speedX += 1;
    speedY += 1;
});

decreaseButton.addEventListener('click', function() {
    if (speedX > 1) speedX -= 1;
    if (speedY > 1) speedY -= 1;
});

//this listens to click events on the canvas and changes the direction of the ball by multiplying the direction by -1 (which is the same as flipping the sign)
canvas.addEventListener('click', function() {
    directionX *= -1;
    directionY *= -1;
});