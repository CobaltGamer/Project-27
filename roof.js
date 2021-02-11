class Roof {
    constructor () {
        var option = {
            isStatic: true
          }
        this.Roof = Bodies.rectangle(400,150,500,20, option);
        World.add(world, this.Roof);
          

    }

    display () {
        var pos = this.Roof.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,500,20);
    }

}