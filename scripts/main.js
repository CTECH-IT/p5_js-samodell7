let img;

function preload(){
img = loadImage('img/minn.jpeg');
}

function setup() {
 
  let cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth- img.width)/2;
  let newCanvasY = (windowHeight- img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  for(let col = 0; col< img.width; col+=.2){
    for(let row = 0; row < img.height; row+=.2){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      push();
      translate(xPos, yPos);
      rotate(random(radians(360)));
      noFill();
      strokeWeight(random(2));
      stroke(color(c))
      curve(xPos, yPos, sin(xPos)*random(20), cos(xPos) * sin(xPos) * random(20), random(10), random(20), cos(yPos) *sin(xPos) * random(20), cos(yPos) * sin(xPos) *random(20)) 
      pop();
    }
  }
}

function draw() {
  
}

