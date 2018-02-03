var clock;

function setup(){
    createCanvas(768, 1024);
    clock = new Clock();    
    textSize(30);
}

function draw(){
    background(0);
    clock.draw();
   
    clock.update();
    stroke(255,255,0);
    fill(255,0,0);
    text(clock.radAcc, 50, 50);
    
}