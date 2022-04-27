let img;

function preload(){
img = loadImage('img/Dlo.webp');
}

function setup() {
 
  let cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth- img.width)/2;
  let newCanvasY = (windowHeight- img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  for(let col = 0; col< img.width; col++){
    for(let row = 0; row < img.height; row++){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      push();
      translate(xPos, yPos);
      stroke(color(c));
      strokeWeight(60);
      point(col,row);
      rect(col, row, 25, 25);
    }
  }
}

function draw() {
  
}

