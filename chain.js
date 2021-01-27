class Chain{
    constructor(pointA,body2){
    var options = {
        pointA : pointA,
        bodyB : body2,
        length: 500,
        stiffness:0.4
    }
    this.pointA = pointA;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
        var pointa = this.chain.pointA;
        var pointb = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x,pointb.y);
    }
}