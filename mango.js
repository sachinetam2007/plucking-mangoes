class Mango{
    constructor(x,y,r)  {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1.0
            
        }
        
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r;
        this.Image=loadImage("mango.png");
        
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