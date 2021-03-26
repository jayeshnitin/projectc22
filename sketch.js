var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	starImage = loadImage("images/starImage.png");

}

function setup() {
	createCanvas(800, 700);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	stars = createSprite(600,30);
	stars.addImage(starImage);
	stars.scale = 0.05;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	starsBody = Bodies.circle(600, 30, 1, {restitution:0.5, isStatic:true});
	World.add(world, starsBody);

	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.velocityX = 0;
  fairy.velocityY = 0;

  starsBody.velocityX = 0;
  starsBody.velocityY = 0;

  stars.x = starsBody.position.x;
  stars.y = starsBody.position.y;

  if(starsBody.position.y>420){
	  Matter.Body.setStatic(starsBody, true)
  }

  if(keyDown("RIGHT_ARROW")) {
	fairy.velocityX=2;
	fairy.velocityY=0;
	//starsBody.velocityY = 3;
}

if(keyDown("LEFT_ARROW")) {
	fairy.velocityX=-2;
	fairy.velocityY=0;
	//starsBody.velocityY = 3;
}

  keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyCode===DOWN_ARROW) {
		Matter.Body.setStatic(starsBody, false);
		starsBody.velocityY = 0;
	}
}
