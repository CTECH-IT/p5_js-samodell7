let img;

function preload(){
img = loadImage('img/dub.jfif');
}

function setup() {
 
  let cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth- img.width)/2;
  let newCanvasY = (windowHeight- img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  for(let col = 0; col<= img.width; col+=(random(2))){
    for(let row = 0; row <= img.height; row+=(random(2))){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      
      stroke(color(c))
      strokeWeight(random(1.5,4));
      
      point(col,row)
      
    }
  }
}

function draw() {
  
}
