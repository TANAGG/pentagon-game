const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var pentagon;
var obstacle;

function setup() {
  createCanvas(800,400);
  
  pentagon = new Pentagon(100,100);
  obstacle = new Obs(200,300,40,PI/2);

  

  engine = Engine.create();
  world = engine.world

}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  //pentagon.display();
  obstacle.display();
}