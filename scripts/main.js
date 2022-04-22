function setup() {
    createCanvas(1200, 400);
} 

function draw() {
    beginShape();
        vertex(random(12,100), random(12,100));
        endShape(CLOSE);

}

function mousePressed(){
    noLoop();
}

function keyPressed(space){
    loop();
} 

