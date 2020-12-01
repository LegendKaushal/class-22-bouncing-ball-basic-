//Namespacing to a simpler format
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engineV,worldV;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engineV = Engine.create();
  worldV=engineV.world;
//json object
  ground_options = {

    isStatic:true
  }
  //obeject -- physical obj vs displayed obj
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(worldV,ground);
console.log(ground);

  ball_Options = {

    restitution:0.75,
    
    

  }

ball = Bodies.circle(200,100,20,ball_Options)
World.add(worldV,ball);
console.log(ball);
}

function draw() {
  background("lightgreen"); 
  Engine.update(engineV);
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)


  //fill("green") 
  //rectMode(CENTER)
  //rect(200,200,50,50);
  
}