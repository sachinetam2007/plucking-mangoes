class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(A){
        this.sling.bodyA = A;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");

            
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            
        
    }
    
}
}
    