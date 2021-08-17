var garden,rabbit;
var gardenImg,rabbitImg;

var apple,appleImg;

var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x= World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();
  spawnLeaf();
  drawSprites();
}

function spawnApple() {

if (frameCount %80 ==0){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale= 0.09;
  apple.velocityY= 3;
  apple.lifetime=500;
}

}

function spawnLeaf() {

  if (frameCount %80 ==0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.scale= 0.09;
    leaf.velocityY= 3;
    leaf.lifetime=500;
  }
  
  }
  




