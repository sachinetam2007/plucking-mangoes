
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImg,boy
const Constraint=Matter.Constraint
function preload()
{
boyImg=loadImage("boy.png")	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create(); 
	world = engine.world;
	ground=new Ground(width/2,580,width,20)
	tree=new Tree(900,580)
	stone=new Stone(235,420,30)
	launcher=new Launcher(stone.body,{x:235,y:420})
	mango1=new Mango(950,100,30)
	mango2=new Mango(860,140,30)
	mango3=new Mango(850,70,30)
	mango4=new Mango(950,70,30)
	mango5=new Mango(930,80,30)
	mango6=new Mango(890,150,30)
	mango7=new Mango(950,120,30)
	mango8=new Mango(890,90,30)
	mango9=new Mango(870,100,30)
	mango10=new Mango(910,110,30)
	mango11=new Mango(950,230,30)
	mango12=new Mango(950,200,30)




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  stone.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  image (boyImg,200,340,200,300)
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)
 
  drawSprites();
 
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    launcher.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
		launcher.attach(stone.body);
       // slingshot.attach(bird.body);
    }
}

function detectCollision(s,m){
	mangoPosition=m.body.position
	stonePos=s.body.position
	var distance=dist(stonePos.x,stonePos.y,mangoPosition.x,mangoPosition.y)
	if(distance<=s.body.circleRadius+m.body.circleRadius){
		Matter.body.setStatic(m.body,false)
    console.log(distance)
	}
  console.log(distance)
}



