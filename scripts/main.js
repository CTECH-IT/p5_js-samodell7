//kinda makes a space ship
function setup() {
    createCanvas(300, 300);
  }
  
  function draw() {
    background(32);
    ship(100,200,50,50);
  }
  
  function ship(bodyX,bodyY,bodyW,bodyH){
  fill(255,255,255)
  rect(bodyX,bodyY,bodyW,bodyH)
    
    fill(255,0,0)
    triangle(bodyX,bodyY,bodyX+bodyW/2,height-bodyY+40,bodyX+bodyW,bodyY)
    
    fill(255,100,0); triangle(bodyX+5,height-bodyX/2,bodyX+bodyW/2,height-bodyX+bodyX*.9,bodyX+bodyW-5,height-bodyX/2)
  }
