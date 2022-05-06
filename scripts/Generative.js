let img;

function preload(){
img = loadImage('img/Dude.png');

}

function setup() {
    let cnv = createCanvas(img.width, img.height);
    for (var i = 0; i < 70; i++) {
        let r = random(windowHeight)
        let s = random(windowWidth)


        fill(random(255), random(255), random(255), random(155));


        rectMode(CENTER);
        fill(random(255), random(255), random(255), random(255));
        rect(s, r, 80, 80);


        fill(random(255), random(255), random(255));



    }

    for (var t = 0; t < 10; t++) {
        let o = random(windowWidth)
        let l = random(windowHeight)
        fill(random(255));
        ellipseMode(CENTER);
        fill(random(255));

        ellipse(o, l, 100, 100);



    }

    
  let newCanvasX = (windowWidth- img.width)/2;
  let newCanvasY = (windowHeight- img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  for(let col = 0; col<= img.width; col+=random(5)){
    for(let row = 0; row <= img.height; row+=random(5)){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      
      
      stroke(color(c)-(0,100,100))
      strokeWeight(10);
      
      point(col,row)
     
    }
  }
}

function draw() {
  
}




let dx = 10
function setup() {
  x = windowWidth
  y = windowHeight
  r= 100
  createCanvas(x, y);
  background(255);
  strokeWeight(5);
  smooth();
 
  ellipseMode(CENTER);

ellipse(x/2, y/2, r*PI, r*PI);
   
  
}


function draw() {
 
  strokeWeight(1)
  line (x/2,y/2,dx+=random(360)*noise(PI),dx+=noise(360)*random(PI))
}
