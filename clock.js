function Clock (){
    this.radius = 0;
    var acc = 3;
    this.accFactor = 0.1 * acc;

    this.r = 100;

    this.radVel = 0;
    this.radAcc = 0;


    this.update = function(){
        angleMode(DEGREES);
        if(this.radius>0 && this.radius< 180){
            this.radAcc = -this.accFactor*sin(this.radius);
            //this.radAcc = -0.1;
        }
        else if (this.radius < 0 && this.radius> -180){
            this.radAcc = -this.accFactor*sin(this.radius);
            //this.radAcc = 0.1;
        }

        //angleMode(RADIANS);
        this.radVel += this.radAcc;
        this.radius += this.radVel;
        //this.a = map(this.radius, 180, 0, PI, PI/2)
        this.x = this.r * sin(this.radius);
        this.y = this.r * cos(this.radius);

    }

    this.draw = function(){
        fill(255,0,0);

        push();
        translate(width/2, height/2);
        text(Math.round(this.radius*10)/10, 0, -40);
        stroke(255);
        fill(100)
        line(0,0, this.x, this.y);
        rectMode(CENTER);
        ellipse(this.x, this.y, 20, 20);
        pop();

    }
}
