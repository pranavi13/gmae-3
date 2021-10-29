var canavas, backgroundImage;

function preload(){
    shooter1=loadImage("shooter_1.png")
    shooter2=loadImage("shooter_2.png")
    shooter3=loadImage("shooter_3.png")
    backgroundImage=loadImage("bg.jpeg")
    zombieing=loadImage("zombie.png")
    
}
function setup(){
    canavas= createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2-35,displayHeight/2-45,20,20)
     bg.addImage(backgroundImage)   
     player=createSprite(displayWidth-800,displayHeight-450,20,20)
        player.addImage(shooter1)
        bg.scale=1
        player.scale=0.6
        zombieGroup=new Group()
}
function draw(){
    background("black")
    if(keyWentDown("space")){
        player.addImage(shooter3)    
    }
    else if (keyWentUp("space")){
        player.addImage(shooter2)
    }

    if(keyDown("DOWN_ARROW") ||touches.length>0){

        player.y+=15
    }
    if(keyDown("UP_ARROW") ||touches.length>0){

        player.y-=15
    }
    if(zombieGroup.isTouching(player)){
        for(var i=0; i < zombieGroup.length; i++){
if (zombieGroup [i].isTouching(player)){
    zombieGroup[i].destroy();
}
        }
    }
    zombies()
drawSprites()
}

function zombies(){
    if(frameCount%60===0){
        zombie=createSprite(random(300,1000),random(100,800),10,10)
        zombie.addImage(zombieing)
        zombie.x+=10
        zombieGroup.add(zombie)
        zombie.scale=0.3
        zombie.velocityX=-4
        zombie.lifetime=400
        zombie.debug=true
    }
    
}
