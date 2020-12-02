class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0.004
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
            strokeWeight(4);
            stroke("black");
            fill("black");
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}