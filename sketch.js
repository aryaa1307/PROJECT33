const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var Santa
var ground
var side, side2, side3
var flakes= [];

function preload()
{
  bg= loadImage("snow2.jpg")
  sc= loadImage("SANTA CLAUS.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Santa=createSprite(100, 335, 50, 50);
  Santa.addImage(sc)
  Santa.scale= 0.3
  ground=createSprite(400,400,800,10)
  side=createSprite(800,200,10,400)
  side2=createSprite(0,200,10,400)
  side3=createSprite(400,0,800,10)
}

function draw() {
  background(bg);  
  fill("white")
  text("Press up arrow to make santa, down arrow to make santa come down, Space to make Santa cpme back to start",50 ,50);

  if (keyDown("up"))
  {
    Santa.velocityY=-12
    Santa.velocityX= 12
  }
    if(keyDown("down"))
  {
    Santa.velocityY=12
    Santa.velocityX= 12
  }
  if(keyDown("space"))
  {
    Santa.x=100
    Santa.y=335
  }

  Santa.bounce(ground)
  Santa.bounce(side)
  Santa.bounce(side2)
  Santa.bounce(side3)

  side.visible= false;
  side2.visible=false;
  side3.visible=false;
  ground.visible=false;

  drawSprites();

  for (var l = 0; l < flakes.length; l++) {
    flakes[l].display();
  }

  if(frameCount%60===0)
  {
    flakes.push(new Snow(random(100,700),random(100,400),10));
  }
}

function keyPressed()
{
  
}