// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, myButton,line,erase, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, BACKSPACE, LEFT_ARROW,pmouseX,pmouseY,createButton,input,btn,save,createInput,savePic, saveCanvas,button,RIGHT_ARROW,ENTER, clear, noLoop,DOWN_ARROW,mode, textSize */

let brushHue,
  previousMouseX,
  gameColor,
  strokeSize,
  gameStart,
  colorChange,
  saveAmount,
  d,
  c,
  img;

function preload() {
  //load image
  mode = 0;
  img = loadImage(
    "https://cdn.glitch.com/e373fcf5-296e-4365-963c-1310db93bdf1%2Fart.gif?v=1626465727426"
  );
}

function setup() {
  // Canvas & color settings
  colorChange = 50;
  strokeSize = 6;
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(strokeSize);
  background(95);
  button = createButton("save image");
  button.position(0, 0);
  button.mousePressed(savePic);
  button = createButton("game");
  button.position(85, 0);
  button.mousePressed(clickGame);
}
function draw() {
  chooseColors();
  //mouseIsPressed();
  if (gameStart) {
    if (mouseIsPressed) {
      // ellipse(mouseX, mouseY, 15, 15);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }else if (keyCode == 82) {
      rect(mouseX, mouseY, 20, 20);
    } else if (keyCode == 69) {
      ellipse(mouseX, mouseY, 20, 20);
    }
  } else {
    image(img, 0, 0);
  }
}

function game() {
  chooseColors();
  if (mouseIsPressed) {
    gameColor = true;
  }
  if (gameColor) {
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //background(95);
  } else if (keyCode == 82) {
    rect(mouseX, mouseY, 20, 20);
  } else if (keyCode == 69) {
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function chooseColors() {
  if (brushHue >= 360) {
    brushHue = 0;
  }
  brushHue += 1;
  stroke(brushHue, colorChange, 80);
  fill(brushHue, colorChange, 80);
}
function keyPressed() {
  if (keyCode == BACKSPACE) {
    background(95);
  } else if (keyCode == 187) {
    strokeWeight((strokeSize += 10));
  } else if (keyCode == 189) {
    if (strokeSize > 0) {
      strokeWeight((strokeSize -= 2));
    } 
  } else if (keyCode == 32) {
    colorChange = random(28, 100);
  } else if (keyCode == 83) {
    saveAmount += 1;
    //name = createInput('')
    saveCanvas("MyCanvas.jpg");
  }
}
function savePic() {
  saveCanvas("MyCanvas.jpg");
}
function clickGame() {
  clear();
  gameStart = true;
  background(95);
}
