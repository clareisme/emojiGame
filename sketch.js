var score = 0; //score starts at 0

let x;
let y;
let r;
let g;
let b;
let timer = 5;
function setup() {
  createCanvas(400, 400);
  background(245);
}

function keyPressed() {
  textSize(32);

  x = random(-20, 400);
  y = random(-20, 400);

  //defining to print text when shift, option, up, down, left, and right arrow keys are pressed
  if (keyCode === LEFT_ARROW) {
    text(":)", x, y);
  } else if (keyCode === RIGHT_ARROW) {
    text(":(", x, y);
  }
  if (keyCode === UP_ARROW) {
    text(":|", x, y);
  } else if (keyCode === DOWN_ARROW) {
    text(":p", x, y);
  }
  if (keyCode === OPTION) {
    text(";)", x, y);
  } else if (keyCode === SHIFT) {
    text(":D", x, y);
  }

  //defining r, g, and b to have fill values so the color gets defined randomly for the text above
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);

  score++;
  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer == 0) {
    score--;
  }
}
function draw() {
  push();
  textAlign(CENTER, CENTER);
  textSize(50);
  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer == 0) {
    background(245);
    text("GAME OVER", width / 2, height / 2);
    push();
    textSize(35);
    text("Score: " + score, width / 2, height / 2 + 50);
    pop();
  }
  pop();
}