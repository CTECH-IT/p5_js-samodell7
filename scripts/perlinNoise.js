var inc = 0.1;
var scl=10;
var cols, rows;
var zoff = 0;

var fr;

function setup() {
  let wX = windowWidth-40;
  let wY = windowHeight-40;
  createCanvas(wX, wY);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP('');
}

function draw() {
  background(255);
  randomSeed(10);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      // let r = random(255);
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff += inc;
       
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      
      pop();
    }
    yoff += inc;
    zoff += .0001
  }

 fr.html(floor(frameRate()));
}