Slider = function(x, y, range0, range1){
    //this.currentR = clock.radius;
    this.absX = x;
    this.absY = y;
    this.size = 600;
    this.buttonSize = 20;
    this.relX = x;

    this.show = function(){
        fill(190);
        rect(this.absX, this.absY, this.size, 5);
        fill(50, 50, 190);
        ellipse(this.relX, this.absY, this.buttonSize);
        this.range = map(this.relX, this.absX, this.absX+this.size, -180, 180);
    }

    this.inRange = function(){
        if((mouseX > x) && (mouseX < x+this.size) && (abs(mouseY - y) < 25)){
            return true;
        }
        else{
            return false;
        }
    }
}

goButton = function(){
    this.isClicked = false;
    this.x = width/2;
    this.y = 150;

    this.show = function(){
        colour = color(255,0,0);
        textAlign(CENTER);
        fill(colour);
        ellipse(this.x, this.y, 80);
        fill(255);
        text('GO!', this.x, this.y);

        if(this.isClicked){
            colour = color(0,255,0);
            clock.radius = slider.range;
            //clock.radius = degraus.value;
            clock.radVel = (0,0);
            this.isClicked = false;
        }
    }

    this.inRange = function(){
        if(dist(mouseX, mouseY, this.x, this.y) < 40){
            return true;
        }
        else{
            return false;
        }
    }
}
