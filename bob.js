class Bob {
    constructor(x,y,radius)  {

    var options = {
        isStatic:false,
        restitution:0.3,
        friction:1,
        density:1,
    }
this.body = Bodies.circle(x,y,radius,options);
World.add (world,this.body);
this.radius = radius;


    }
    
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
       pop();
    }
}