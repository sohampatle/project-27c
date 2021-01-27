class Ball extends Base {
    constructor(x, y){
      super(x,y,20,20);
      this.image = loadImage("dot.png");
    }
  display(){
    //this.body.velocityX = 5;
    
     var pointa  = this.body.position;
    
    push();
    translate(pointa.x,pointa.y);
    ellipseMode(RADIUS);
    ellipse(0,0,20,20); 
    pop()
    //super.display();
  }
  };