// This line gets the drawing area we'll use for our game.
const canvas = document.getElementById("canvas");

// This line allows us to draw on the drawing area.
const ctx = canvas.getContext("2d");

// These lines set the size of our drawing area.
const CANVAS_WIDTH = (canvas.width = 900);
const CANVAS_HEIGHT = (canvas.height = 900);
const SPRITE_WIDTH = 15;
const SPRITE_HEIGHT = 31;

const BAT = 100;

let directionX = -1; // 1 for right, -1 for left
let directionY = -1; // 1 for down, -1 for up
let hit = false;
let speedX = 2; // adjust this to change the speed in the x direction
let speedY = 2; // adjust this to change the speed in the y direction

const increaseButton = document.getElementById("increase-speed");
const decreaseButton = document.getElementById("decrease-speed");
const startButton = document.getElementById('start');
// This is where the bat is located
// This is the image of the ball.
const baseball = new Image();
const playerImage = new Image();
const spriteAnimations = [];
const states = [
  {
    name: "idle",
    frames: 0,
    width: 15,
  },
  {
    name: "start swing",
    frames: 16,
    width: 20,
  },
  {
    name: "swing",
    frames: 39,
    width: 24,
  },
  {
    name: "swing follow through",
    frames: 63,
    width: 26,
  },
  {
    name: "continue follow through",
    frames: 93,
    width: 26,
  },
  {
    name: "end",
    frames: 120,
    width: 26,
  },
];

states.forEach((state, index) => {
  console.log(state.frames);
  let frames = {
    loc: [],
  };
  for (let i = 0; i < state.frames; i++) {
    let positionX = i * SPRITE_WIDTH;
    let positionY = index * SPRITE_HEIGHT;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
console.log(states);

// This line tells the browser where to find the image.
//ballImage.src = 'baseball.jpeg';
baseball.src = "baseball.png";
playerImage.src = "player.png";


// These variables control the position of the ball.
let x = 800;
let y = 400;

swing = false;

let frameX = 0;
let frameY = 0.5;
// The base number of how fast the frames will change
let gameFrame = 0;
//How much lag time between frames
let lagtime = 8;
let position = 0;
let width = 15;
let count = 0;

// This function is called repeatedly to animate the game.
function animate() {
  // This line clears the drawing area.
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if(swing == true)
  {
    position = states[count].frames;
    width = states[count].width;
  } else {
    position = states[0].frames;
    width = states[0].width;
  }

  //ctx.drawImage(playerImage, x, y, 60, 50);

  // This line draws the ball.
  //ctx.drawImage(ballImage, x, y, 60, 50);
  //ctx.drawImage(playerImage, frameX, frameY, SPRITE_WIDTH, SPRITE_HEIGHT, SPRITE_HEIGHT, SPRITE_WIDTH);
  //context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
  ctx.drawImage(
    playerImage,
    position,
    40,
    width,
    SPRITE_HEIGHT,
    0,
    300,
    200,
    200
  );

  ctx.drawImage(baseball, x, y, 60, 50);

  x += directionX * speedX;
  if(hit)
  {
      y += directionY * speedY;
  }
  // This line moves the ball.
  if (gameFrame % lagtime == 0) {
    frameX++;
    count++;
  }

  if (x <= BAT && count === 2) { 
    speedX = 0;
    hit = true;
    // speedY = 0;
    //change the direction of the ball
    directionX *= -1;
    directionY *= 1;
    speedX = 20;
    speedY = 10;
}
  //   states.forEach((state) => {
  //     //if(state.name == 'idle')
  //     frameX = state.frames;

  //     //SPRITE_WIDTH = state.width;
  //   });

  if (count > 5) {
    count = 0;
    swing = false; 
  } 


  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`x: ${x}, y: ${y}, speedX: ${frameX}, pos: ${position}`, 10, 30);
  //gets the remainder of gameFrame and lagtime and if it's = to 0 then run the code
  // exampel 15 % 5 = 0   16 % 5 = 1
  // if(gameFrame % lagtime == 0)
  // {
  //     if(frameX < 6) frameX++;
  //     else frameX = 0;
  // }
  //increate the gameFram by 1 everytime the animate runs
  gameFrame++;
  // This line calls the animate function again after waiting 1/60th of a second.
  requestAnimationFrame(animate);
}

// This line starts the game.
animate();

increaseButton.addEventListener("click", function () {
  frameX += 1;
});

decreaseButton.addEventListener("click", function () {
  frameX -= 1;
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 32) {
    // 32 is the key code for the space bar
    swing = true;
  }
});

// startButton.addEventListener('click', function() {
//     //reset the ball to the starting position
//     hit = false;
//     speedX = 2;
//     speedY = 2;
//     x = 800;
//     y = 400;
//     directionX = -1;
//     directionY = -1;
// });
