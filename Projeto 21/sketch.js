
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball, ball_options;
var groundObj;
var wallLeft, wallRight;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restituition: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200,100,40,ball_options);

	World.add(world, ball);

	groundObj = new GroundObj(width/2, 670, width, 20);

	wallLeft = new GroundObj(1100, 600, 20, 120);
	wallRight = new GroundObj(1350, 600, 20, 120);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

  ellipse(ball.position.x,ball.position.y,40)

  wallLeft.display();
  wallRight.display();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 85, y:-85});
	}
}

