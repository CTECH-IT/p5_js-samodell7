function setup() {
    createCanvas(windowWidth, windowHeight)
    for (var i = 0; i < 50; i++) {
        let r = random(windowHeight)
        let s = random(windowWidth)


        fill(random(255), random(255), random(255), random(155));


        rectMode(CENTER);
        fill(random(255), random(255), random(255), random(255));
        rect(s, r, 80, 80);


        fill(random(255), random(255), random(255));

        for (var t = 0; t < 10; t++) {
            let o = random(windowWidth)
            let l = random(windowHeight)
            fill(random(255));
            ellipseMode(CENTER);
            fill(random(255));
            if (o+50 != windowWidth){
                ellipse(o, l, 100, 100);
            }
            
        }

    }
}
