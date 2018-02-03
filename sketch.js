var clock;

function setup(){
    createCanvas(768, 1024);
    clock = new Clock();
    textSize(30);
    slider = new Slider(70,70, 0, 255);
    button = new goButton();
    var degraus = document.getElementById('degraus');
}

function draw(){
    background(0);
    button.show();
    fill(255);
    slider.show();
    text(Math.round(slider.range*10)/10, width/2, 50);
    //text(dist(mouseX, mouseY, slider.relX, slider.absY), 20, 400);
    //text(sqrt((mouseX-slider.relX)**2 + (mouseY-slider.absY)**2), 20, 400);
    clock.draw();

    clock.update();

    stroke(255,255,0);

    // if((sqrt((mouseX-slider.relX)**2 + (mouseY-slider.absY)**2)< slider.buttonSize) && mouseIsClicked){
    //     console.log('oh ye');
    // }
    if(mouseIsPressed && slider.inRange()){

        console.log('oh ye');
        slider.relX = constrain(mouseX, slider.absX, slider.absX+slider.size);
    }

    if(mouseIsPressed && button.inRange()){
        console.log(degraus.value);
        button.isClicked = true;

    };

}



function mouseDragged() {

}
