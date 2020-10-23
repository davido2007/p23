var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxside1,boxside2,boxside3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxside1=createSprite(300,610,20,100);
	boxside1.shapeColor=color("red")

	boxside2=createSprite(400,650,200,20);
	boxside2.shapeColor=color("red")

	boxside3=createSprite(500,610,20,100);
	boxside3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	boxside1 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
	World.add(world, boxside1);

	boxside2 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	World.add(world, boxside2);

	boxside3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	World.add(world, boxside3);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);	
}
}