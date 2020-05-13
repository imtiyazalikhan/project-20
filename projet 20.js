var car,wall;
var speed,weight;
function setup(){
createcanvas(1500,60);
car =createSprite(50,200,50,50);
car.velocity=speed
car.shapecolor=color("green");
wall= createSprite(1500,200,60,height/2);
wall.shapecolor=color("red");
speed=random(55,90);
weight=random(400,1500);
}
function draw(){
background(0);
if(wall.x-car.x<(car.weight+wall.weight)/2){
car.velocity=0;
var deformation=0.5*weight*speed*speed(22509);
if(deformation>180){
car.shapecolor=color(255,0,0);
}
if(deformation<180&&deformation>100){
    car.shapecolor(230,230,0);
}
if(deformation>100){
    car.shapecolor=color(0,255,0);
}

}

drawSprites();

}