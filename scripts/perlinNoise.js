var inc = 0.01;
var scl=20;
var cols, rows;

function setup() {
  let wX = windowWidth-40;
  let wY = windowHeight-40;
  createCanvas(wX, wY);
  cols = floor(width/scl);
  rows = floor(height/scl);
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      // let r = random(255);
      let r = noise(xoff, yoff) * 255;
      xoff += inc;
       
      fill (map(noise(255)));
      rect(x*scl, y*scl, scl, scl);
    }
    yoff += inc;
  }


}