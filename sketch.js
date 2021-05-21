
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,waste;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	waste = new Paper(200,400,40);
 
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(230);
 
  
  
  groundObject.display();
  dustbinObj.display();
  waste.display();

}
function keyPressed() { 

	if(keyCode===UP_ARROW) {
		 Matter.Body.applyForce(waste.body,waste.body.position,{x:80,y:-110});
		 } 
} 
