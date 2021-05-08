

class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      
      this.width = 450;
      this.height = 600;
      this.thickness=10;
      //this.leftbody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
      //this.rightbody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
      this.bottombody = Bodies.rectangle(x,y,this.width,this.thickness,options);
     
      this.Image=loadImage("tree.png")
      //World.add(world, this.leftbody);
      //World.add(world, this.rightbody);
      World.add(world, this.bottombody);
    }
    display(){
      //var pos1 =this.leftbody.position;
      //var pos2 =this.rightbody.position;
      var pos3 =this.bottombody.position;
     push ();
      translate(pos3.x,pos3.y+10); 
      rotate (this.bottombody.angle)
      rectMode(CENTER);
      fill("yellow");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode (CENTER)
      image(this.Image,0,-this.height/2,this.width,this.height)
     pop ();
    }
  };