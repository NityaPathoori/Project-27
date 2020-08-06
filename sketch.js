
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  

  

  bob1 = new Bob(100,650,50);
  bob1.shapeColor = "pink"
  bob2 = new Bob(200,650,50);
  bob2.shapeColor = "pink"
  bob3 = new Bob(300,650,50);
  bob3.shapeColor = "pink"
  bob4 = new Bob(400,650,50);
  bob4.shapeColor = "pink"
  bob5 = new Bob(500,650,50);
  bob5.shapeColor = "pink";

  roof1 = new Roof(350,75,700,40);

  rope1 = new Rope(bob1.body,roof1.body,-200,0);
  rope2 = new Rope(bob2.body,roof1.body,-100,0);
  rope3 = new Rope(bob3.body,roof1.body,0,0);
  rope4 = new Rope(bob4.body,roof1.body,100,0);
  rope5 = new Rope(bob5.body,roof1.body,200,0);

 

  

  drawSprites();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
}



