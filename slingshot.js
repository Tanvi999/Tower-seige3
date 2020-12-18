class Slingshot 
{
    constructor(A,B)
    {
       var options = 
    {
        bodyA : A,
        pointB : B,
        length : 30,
        stiffness : 0.3
    }
    this.pointB = B;
    this.rope = Matter.Constraint.create(options);
    World.add(world, this.rope); 
    }
    display()
    {

        if (this.rope.bodyA) {
            var posA = this.rope.bodyA.position;
            var posB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            if (this.rope.bodyA) {
                var posA = this.rope.bodyA.position;
                var posB = this.pointB;
                push();
                strokeWeight(4);
                stroke(48,22,8);
                line(posA.x,posA.y,posB.x,posB.y)
                pop();
            }
        }
    }
    fly()
    {
        this.rope.bodyA = null;
    }
    attach(body)
    {
        this.sling.bodyA(body)
    }
}
