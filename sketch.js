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

function keyPressed(){
  //background(245);
  textSize(32);
  
  x = random(-20, 400);
  y = random(-20, 400);
  
  //defining to print text when the left, right, down, up, option, and shift arrow key is pressed
  if (keyCode === LEFT_ARROW) {
    text(':)', x, y);
  } else if (keyCode === RIGHT_ARROW) {
    text(':(',  x, y);
  }  
  if (keyCode === UP_ARROW) {
    text(':|',  x, y);
  } else if (keyCode === DOWN_ARROW) {
    text(':p',  x, y);
  }  
  if (keyCode === OPTION) {
    text(';)',  x, y);
  } else if (keyCode === SHIFT) {
    text('<3',  x, y);
  } 
  
  //defining r, g, and b to have fill values so the color gets defined randomly for the text above 
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);  
  score += 1;
}
function draw (){
  //background(220);
  push();
  textAlign(CENTER, CENTER);
  textSize(50);
  //text(timer, width/2, height/2);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
   timer --;
  }
  if (timer == 0) {
    background (245);
    text("GAME OVER", width/2, height/2);
    text("Score: " + score, width/2, height/2 + 40);
  }
  pop();
  //text("Keys: control, shift, up, down, left, right", 20, 80)

  //The string "Score: " is concatenated to the score variable, which helps explain to the player what the number means
  // push();
  // textSize(10);
  // text("Score: " + score, 20, 20);
  // pop();
  
}
// where as while i was making this one, this was more fun and less complex coding. and i realised that some complex actions could turn out to be easy in code.