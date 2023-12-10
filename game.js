// This line gets the drawing area we'll use for our game.
const canvas = document.getElementById('canvas');

// This line allows us to draw on the drawing area.
const ctx = canvas.getContext('2d');

// These lines set the size of our drawing area.
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// This is where the bat is located
const BAT = 50;

// These lines get the buttons from the HTML page.
const increaseButton = document.getElementById('increase-speed');
const decreaseButton = document.getElementById('decrease-speed');
const startButton = document.getElementById('start');

// This is the image of the ball.
const ballImage = new Image();

// This line tells the browser where to find the image.
ballImage.src = 'baseball.jpeg';

// These variables control the position of the ball.
let x = 540;
let y = 300;
let directionX = -1; // 1 for right, -1 for left
let directionY = -1; // 1 for down, -1 for up
let hit = false;
let speedX = 2; // adjust this to change the speed in the x direction
let speedY = 2; // adjust this to change the speed in the y direction

// This function is called repeatedly to animate the game.
function animate() {
    // This line clears the drawing area.
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // This line draws the ball.
    ctx.drawImage(ballImage, x, y, 60, 50);

    // This line moves the ball.
    x += directionX * speedX;
    if(hit)
    {
        y += directionY * speedY;
    }
    
    //if the ball hits the bat, it will bounce back
    if (x <= BAT) { 
        speedX = 0;
        hit = true;
        // speedY = 0;
        //change the direction of the ball
        directionX *= -1;
        directionY *= 1;
        speedX = 20;
        speedY = 10;
    }
    //if the ball hits the wall, it will bounce back
    if (y >= CANVAS_HEIGHT - 50 || y <= 0) { // 50 is the height of the image
       // directionY *= -1;
    }

    //This is the text at the top of the screen that shows the x and y coordinates of the ball
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`x: ${x}, y: ${y}, speedX: ${speedX}, speedY: ${speedY}`, 10, 30); 

    // This line calls the animate function again after waiting 1/60th of a second.
    requestAnimationFrame(animate);
};

// This line starts the game.
animate();

// This function is called when the increase button is clicked and increases the speed of the ball
increaseButton.addEventListener('click', function() {
    speedX += 1;
    speedY += 1;
});

// This function is called when the decrease button is clicked and decreases the speed of the ball
decreaseButton.addEventListener('click', function() {
    if (speedX > 1) speedX -= 1;
    if (speedY > 1) speedY -= 1;
});

//this function is called when the start button is clicked and start or restarts the pitch
startButton.addEventListener('click', function() {
    //reset the ball to the starting position
    hit = false;
    speedX = 2;
    speedY = 2;
    x = 540;
    y = 300;
    directionX = -1;
    directionY = -1;
});

//this listens to click events on the canvas and changes the direction of the ball by multiplying the direction by -1 (which is the same as flipping the sign)
canvas.addEventListener('click', function() {
    directionX *= -1;
    directionY *= -1;
});