
var cat, catImage, cat_walking, cat_collided;

var mouse, mouse_standing, mouse_collided;

var forestImage;

var canvas;


function preload() {

    catImage = loadAnimation("images/tomOne.png");

    cat_walking = loadAnimation("images/tomTwo.png", "images/tomThree.png");

    mouse_standing = loadAnimation("images/jerryThree.png","images/jerryOne.png");

    cat_collided = loadAnimation("images/tomFour.png");

    mouse_collided = loadAnimation("images/jerryTwo.png");

    forestImage = loadImage("images/garden.png");

}
function setup(){
    createCanvas(1000,800);

    cat = createSprite(800,600);
    cat.addAnimation("images/tomOne.png", catImage);
    cat.scale = 0.2;

    mouse = createSprite(250,600);
    mouse.addAnimation("standing", mouse_standing);
    mouse.scale = 0.2;
}

function draw() {

    background(forestImage);

    if(cat.isTouching(mouse)){

        cat.velocityX = 0;
        cat.addAnimation("collided", cat_collided);
        cat.changeAnimation("collided");
        cat.x - 300;
        cat.scale = 0.25;
        

        mouse.addAnimation("collided",  mouse_collided);
        mouse.scale = 0.18;
        mouse.changeAnimation("collided");
    }

    //cat.debug = true;
    //mouse.debug = true;

    mouse.setCollider("rectangle", 0, 0, 300,600);
    cat.setCollider("rectangle", 0, 0, 600,800);

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("walking", cat_walking);
        cat.changeAnimation("walking");
        cat.scale = 0.3;
    }

    if(cat.isTouching(mouse)){
        cat.velocityX = 0;
    }

     

}