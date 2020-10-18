var ghost,ghost_running;
var door, doorImg;
var climber, climberImg;
var tower, towerImg;
var climberGroup,doorGroup,invisadleGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  ghost_running = loadImage("ghost-jumping.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage ("climber.png");
  towerImg = loadImage("tower.png");

}

function setup(){
createCanvas(600,600);

tower = createSprite(300,300);
tower.addImage("tower", towerImg);
tower.velocityY = -2;

tower.y = tower.height/2;

ghost = createSprite(300,300,10,10);
  ghost.addImage("ghost_running",ghost_running);
ghost.scale=0.3;
 
  doorGroup=new Group();
  climberGroup=new Group();
  invisableGroup=new Group();
}

function draw(){
background("black");



if(gameState===PLAY){
  
  if(tower.y< 0){
  tower.y = tower.height/2;
  }
  Spawndoors();
 if(keyDown("space")){
  ghost.velocityY=-10;
 }  
   ghost.velocityY= ghost.velocityY+0.8;
  
  if(keyDown("LEFT_ARROW")){
  ghost.x=ghost.x-3;
  }
  
 if(keyDown("RIGHT_ARROW")){
  ghost.x=ghost.x+3;
  } 
 if (climberGroup.isTouching(ghost)){
   ghost.velocityY=0;
 }
  if(invisableGroup.isTouching(ghost) || ghost.y>500){
    ghost.destroy();
    gameState=END;
  }
  
  drawSprites();
}  else if (gameState===END){
  stroke("Yellow");
  fill("yellow")
  textSize(30);
      text("game Over",300,300);
  
  
  
  
  
} 
  

  }

function Spawndoors(){
  if(frameCount%240===0){
     door=createSprite(200,-50);
    door.addImage(doorImg);
    
   climber=createSprite(200,10) ;
    climber.addImage(climberImg);
    
    var invisable=createSprite(200,15);
    invisable.width=climber.width;
    invisable.height=2;
    
    door.x=Math.round(random(120,400));
    climber.x=door.x;
    invisable.x=door.x;
    
    door.velocityY=1;
    invisable.velocityY=1;
    climber.velocityY=1;
    
    door.lifetime=800;
    climber.lifetime=800;
    invisable.lifetime=800;
    
    doorGroup.add(door);
    climberGroup.add(climber);
    invisableGroup.add(invisable);
    
    ghost.depth=door.depth;
    ghost.depth++;
    
    
    
    
    
    
  }
}