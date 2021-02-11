
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof();
	bob1 = new Bob(325,680,40);
	bob2 = new Bob(405,680,40);
	bob3 = new Bob(485,680,40);
	bob4 = new Bob(565,680,40);
	bob5 = new Bob(645,680,40);
	
	rope1 = new Rope(bob1.body,roof.body,80,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display()
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display();
  
  drawSprites();
 
}



