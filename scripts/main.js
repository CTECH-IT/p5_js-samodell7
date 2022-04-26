function preload() {
  img = loadImage('Sprite.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
  rectMode(CENTER);
  ctx = drawingContext;
  x = width/2;
  y= height/2;
  textAlign(CENTER,CENTER);
  textFont('Lobster');

  
  
  background(random(255),random(255),random(255))

  
  
  for (let i = 0; i < 45; i++) {
    fill(random(255), random(255), random(255), random(255));
    rect(random(width+-30), random(height+-30), random(x), random(x) );
  }
  imageMode(CENTER);
}

/*function draw() {
  
  image(img, random(width), random(height), 900, 200,);
}*/

function mouseIsPressed(){
  image(img, random(width), random(height), 900, 200,);
}

