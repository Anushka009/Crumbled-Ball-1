// creates the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creates the variables
var engine, world;

function setup() {

  // creates the canvas
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);

  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 20, 100);
  bottom = new Dustbin(610, 660, 100, 20);
  rightSide = new Dustbin(670, 620, 20, 100);

  // makes the code run
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  // makes the backround pink
  background("LightPink");
  
  // updates the code
  Engine.update(engine);

  // displays the objects
  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  // draws the sprites
  drawSprites();
 
}

function keyPressed(){

  // makes the ball move and go in the dustbin
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}