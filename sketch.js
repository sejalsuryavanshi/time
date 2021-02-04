
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,stone1,rubber1,plane1;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	stone1  = new Stone (300,560,70,60);
	hammer1 = new Hammer(400,350,150,50);
	plane1  = new Plane (400,640,800,10);
	rubber1 = new Rubber(600,560,50,50 )

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  
  rubber1.display()
  stone1.display();
  hammer1.display();
  plane1.display();
  drawSprites();
 
}



