class Bob {
    constructor (x,y,radius) {
        var options = {
            isStatic:false
        }
        this.Bob = Bodies.circle(x,y,radius/2, options);
        this.radius = radius;
        World.add(world,this.Bob)
        
    }
    display() {
        var pos = this.Bob.position;
      //  var angle = this.Paper1.angle;
        push();
        translate(pos.x,pos.y)
      //  rotate(angle)
      //  angleMode(RADIANS);
        ellipseMode(RADIUS);
        fill("pink"); 
        ellipse(0,0,this.radius,this.radius);
        pop(); 
        
    }

}
