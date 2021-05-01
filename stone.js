class Stone{
    constructor(x,y,r)  {
        var options={
            isStatic:false,
            restitution:0.1,
            friction:1.0,
            density:1.2
        }
        
        this.body=Bodies.circle(x,y,r/2,options)
        this.radius=r;
        this.Image=loadImage("stone.png");
        
        World .add(world,this.body);
    }
    display(){
        
        var pos=this.body.position;
        push ();
        translate(pos.x,pos.y)
        rotate (this.body.angle);
        //circle(0,0,this.radius)
        imageMode (CENTER)
        image(this.Image,0,0,this.radius*2,this.radius*2);
        pop ();
    }
  }