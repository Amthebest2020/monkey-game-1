var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivvalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400 , 400);
  
FoodGroup = createGroup;
obstacleGroup = createGroup;  
  
  ground = createSprite(400 , 350 , 900 , 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
 
  monkey = createSprite(80 , 315 , 20 , 20)
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  
  
  
  
}


function draw() {

  background("white")
  
  
  if(frameCount % 50 === 0){
    ground = createSprite(400 , 350 , 900 , 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  }
  
  if(keyDown("space")){
    monkey.velocityY = -5; 
  }
 monkey.velocityY = monkey.velocityY+0.5; 
  monkey.collide(ground);
  
  stroke("white");
  textSize = 20;
  fill("white")
  text("Score:" + score , 500 , 50 );
  
  stroke("black");
  textSize = 20;
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime , 100 , 50);
  
  if(frameCount % 80 === 0){
    banana = createSprite(400 , 100 , 20 , 20)
    banana.scale = 0.1;
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120 , 200))
    banana.velocityX = -2;
    banana.lifetime = 400;
    //FoodGroup.add(banana);
      }
  
 if(frameCount % 300 ===0){
   obstacle = createSprite(400 , 100 , 20 , 20)
   obstacle.scale = 0.1;
   obstacle.addImage(obstacleImage);
   obstacle.y = Math.round(random(120 , 200))
    obstacle.velocityX = -2;
    obstacle.lifetime = 400;
   //obstacleGroup.add(obstacle);
 }
  
  drawSprites();
}








  







