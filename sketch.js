const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform,platformImg;
var block1,block2;
var boxImg,box,box2;
var score=0;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("2387.jpg");
    polygon_img = loadImage("0.png");
    boxImg = loadImage("jk.png");
}

function setup(){
    var canvas = createCanvas(1600,450);

    engine = Engine.create();
    world = engine.world;
    //block1 = new blocks(435,390,40,60);
    blocking1 = new blocks5(620,220,40,40);

    blockes1 = new blocks4(600,250,40,40);
    blockes2 = new blocks4(640,250,40,40);
    blockes3 = new blocks4(640,250,40,40);
    blockes4 = new blocks4(1165+30,180,40,40);

    blocked1 = new blocks3(603.4,299,40,40);
    blocked3 = new blocks3(1175,250,40,40);
    blocked4 = new blocks3(1210,250,40,40);

    blockno1 = new blocks(555,350,40,40);
    blockno2 = new blocks(595,350,40,40);
    blockno3 = new blocks(635,350,40,40);
    blockno4 = new blocks(675,350,40,40);
    blockno5 = new blocks(715,350,40,40);
    blockno6 = new blocks(1145,290,40,40);
    blockno7 = new blocks(1185,290,40,40);
    blockno8 = new blocks(1205,290,40,40);
    blockno9 = new blocks(1235,290,40,40);

    block2 = new blocks2(535,399,40,40);
    block3 = new blocks2(570,399,40,40);
    block4 = new blocks2(605,399,40,40);
    block5 = new blocks2(660,399,40,40);
    block6 = new blocks2(680,399,40,40);
    block7 = new blocks2(710,399,40,40);
    block8 = new blocks2(744,399,40,40);
    //block9 = new blocks2(1105,315,40,40);
    block10 = new blocks2(1135+13,304,40,40);
    block11 = new blocks2(1170+5,304,40,40);
    block12 = new blocks2(1200+5,304,40,40);
    block13 = new blocks2(1245-5,304,40,40);
    block14 = new blocks2(1295-5,307,40,40);
    ground = new Ground(640,400,400,20);
    platform = new Ground(1190, 305, 450, 20);

    ball = Bodies.circle(380,200,60);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});

    var options ={
        isStatic : true
    }
    box = Bodies.rectangle(1200,387,20,20,options);
    World.add(world,box);
    
    var options ={
        isStatic : true
    }
    box2 = Bodies.rectangle(630,482,20,20,options);
    World.add(world,box2);

}

function draw(){
    rectMode(CENTER);
    background(60, 205, 195);
    Engine.update(engine);
    ground.display();
    //block1.display();
    blocking1.display();

    blockes1.display();
    blockes2.display();
    blockes3.display();
    blockes4.display();

    blocked1.display();
    //blocked2.display();
    blocked3.display();
    blocked4.display();

    blockno1.display();
    blockno2.display();
    blockno3.display();
    blockno4.display();
    blockno5.display();
    blockno6.display();
    blockno7.display();
    blockno8.display();
    blockno9.display();

    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    //block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    platform.display();

    imageMode(CENTER);
    image(polygon_img ,ball.position.x+250,ball.position.y,40,40);

    imageMode(CENTER);
    image(boxImg,box.position.x,box.position.y);

    imageMode(CENTER);
    image(boxImg,box2.position.x,box2.position.y);

    //for score
    blockes1.score();
    blockes2.score();
    blockes3.score();
    blockes4.score();

    blocking1.score();

    blocked1.score();
    blocked3.score();
    blocked4.score();

    blockno1.score();
    blockno2.score();
    blockno3.score();
    blockno4.score();
    blockno5.score();
    blockno6.score();
    blockno7.score();
    blockno8.score();
    blockno9.score();
 
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    //block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    //block2.score();

    /*fill("black");
    textSize(20);
    text("Score: "+score,1500,50);*/
}
function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
    }
  }
  function mouseReleased(){
    slingShot.fly();
    gameState="launched"
  }

  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
  }