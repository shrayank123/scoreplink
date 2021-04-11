
  const World = Matter.World;
  const Events = Matter.Events,
   Bodies = Matter.Bodies;
  const Engine = Matter.Engine;
 
var particles = [];
var plinkos = [];
var divisions =[]; 
var particle; 
var rows=[]; 

var divisionHeight=300; 
var score =0; 
var count = 0; 
var gameState ="start";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 text("score : ", + score ,20,40);
 fill("white");
 textSize(35);
 text("500",5,550);
 text("100",80,550);
 text("300",170,550);
 text("10",250,550);
 text("800",340,550);
 text("90",430,550);
 text("400",490,550);
 text("1",590,550);
 text("30",660,550);
 text("900",730,550);



  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

 for (var i = 0; i < particles.length; i++) {
    particles[i].display();
     
    if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
     score=score+500;
     particles.pop();
    }
   else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
     score = score + 100;
     particles.pop();
   }
   else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
     score = score + 200;
     particles.pop();
   }
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}


function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}
