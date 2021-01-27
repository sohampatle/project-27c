class Base {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x, y, width, height,angle, options);
        this.width = width;
        this.height = height;
        
        this.image = loadImage("dot.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
         //fill(255);
      strokeWeight(4);
      stroke("green");
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}