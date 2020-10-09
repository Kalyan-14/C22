const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ball, kalyan;

function setup() {
  var canvas = createCanvas(500,500);
  
  engine=Engine.create();
  world=engine.world;

  var ground_options={
  isStatic:true

  
  }

  ground = Bodies.rectangle(250,450,500,50,ground_options);
  World.add(world,ground);
  console.log(ground.position.x);

  var ball_options={
    restitution:1.0
  }

  ball = Bodies.circle(200,100,50,ball_options);
  World.add(world,ball);
  
  var kalyan_options={
    restitution:0.1
  }

    kalyan = Bodies.circle(300,100,10,kalyan_options);
  World.add(world,kalyan);
  
}

function draw() {
  background("skyblue");  
  
Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(kalyan.position.x,kalyan.position.y,5,5);
}