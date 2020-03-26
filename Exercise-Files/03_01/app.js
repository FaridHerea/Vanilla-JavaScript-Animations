var canvas = document.getElementById('animated-canvas');
var context = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circlex = 60;
var velocity = 1;
var acceleration = 0.5;

function canvasAnimation() {
    circlex++;
    drawCircle(circlex, canvas.height/2, 35);
    canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s) {
    clearCanvas();
    context.fillStyle = 'crimson';
    context.beginPath();
    context.arc(x, y, s, 0, 2 * Math.PI);
    context.fill();
    velocity += acceleration;
    circlex += velocity;
    if (circlex > canvas.width) {
        circlex = 0;
        velocity = 1;
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
}

drawCircle();