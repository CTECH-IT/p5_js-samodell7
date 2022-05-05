let img;

function preload(){
img = loadImage('img/minn.jpeg');
}

function setup() {
 
  let cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth- img.width)/2;
  let newCanvasY = (windowHeight- img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  for(let col = 0; col<= img.width; col+=random(5)){
    for(let row = 0; row <= img.height; row+=random(5)){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      //push();
      //translate(xPos, yPos);
     // rotate(noise(radians(360)));
      //noFill();
      stroke(color(c))
      strokeWeight(10);
      
      point(col,row)
      //line(xPos, yPos, noise(random(2)),noise(random(2)));
      //curve(xPos, yPos, sin(xPos)*random(20), cos(xPos) * sin(xPos) * random(20), random(10), random(20), cos(yPos) *sin(xPos) * random(20), cos(yPos) * sin(xPos) *random(20)) 
      //pop();
    }
  }
}

function draw() {
  
}

