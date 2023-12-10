const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const ballImage = new Image();

ballImage.src = 'baseball.jpeg';

let x = 50;
let y = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(ballImage, x, y, 60, 50);
  
    // x++;
    // y--;

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`, 10, 50);
    requestAnimationFrame(animate);
};

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

// function animate() {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     //ctx.drawImage(ballImage, x, y, 60, 50);

//     // Display the mouse coordinates
//     ctx.fillStyle = 'black';
//     ctx.font = '20px Arial';
//     ctx.fillText(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`, 10, 50);

//     requestAnimationFrame(animate);
// };

animate();