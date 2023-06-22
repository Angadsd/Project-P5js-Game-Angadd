let MAIN;
let started = false;
let score = 0
let click = -1 
const SPACE_KEY = 32;
let bgR = 255;
let bgG = 255;
let bgB = 255;




function preload() {
//backg
  MAIN = loadImage("MAIN.png");
  Back = loadImage("BACK.png");
}
  

function setup() { 
  //The starting screen
  createCanvas(windowWidth, windowHeight);
  image(MAIN, 0, 0, width, height);
  textSize(40);
  textStyle(BOLD)
  textAlign(CENTER, CENTER);
  fill(90,90,90)
  textSize(40);
  text("Press To Start", width / 2,height * .8);
  textSize(20)
  text("By Angad Dhindsa", width / 2,height * .9);
  frameRate(500);
  strokeWeight(2)
  rectMode(CENTER);
  x = random(width);
  y = random(height);

}

function draw() {
  // when started a square appears in a random spot
  if (started) {
    background(255, 255, 255)
    image(Back, 0, 0, width, height);
    textSize(20)
    fill(0,0,0)
    text("By Angad Dhindsa ", width/2 , height * .9);
    text("Click The object ", width/2 , height * .96);
    text("Accuracy = %" + int(score*100/click), width/2, height * .80)
    fill(bgR, bgG,bgB);
    rect(x,y,40)
  }
  if (keyIsDown(SPACE_KEY)) {
     //changes colour of square
  bgR = random(256)
  bgG = random(256)
  bgB = random(256)
  }
}


  
function mousePressed() {
  // When mouse pressed the starts. If the mouse is within the parameters of the square when clicked it should disappear and appear in a new spot. Square adds by one.
  if (!started) {
    started = true;
  }

    
 else if (x - 20 < mouseX && mouseX < x + 20 && y - 20 < mouseY && mouseY < y + 20) {
    score += 1 
    print("You got it!")
    x = random(width);
    y = random(height);
  }
  print("click")
  click += 1
}
function doubleClicked() { 
  // changes target to circle and resets score 
rect = ellipse 
  click = 0
  score = 0
}