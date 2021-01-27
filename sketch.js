
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var ground;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(300,500);
ball2 = new Ball(350,500);
ball3 = new Ball(400,500);
ball4 = new Ball(450,500);
ball5 = new Ball(500,500);
ground = new Ground(400,50,400,20);
chain1  = new Chain({x:400-80,y:60},ball1.body);
chain2  = new Chain({x:400-40,y:60},ball2.body);
chain3  = new Chain({x:400,y:60},ball3.body);
chain4  = new Chain({x:400+40,y:60},ball4.body);
chain5  = new Chain({x:400+80,y:60},ball5.body);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  Engine.run(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



