var b=new Array(50); 
var h= [1];
function setup() {
  createCanvas(500, 500);

  //b= new Bacteria[50];
  for (var i =0; i<b.length; i++) {
    b[i]=new Bacteria(width/2, height/2);
  }
  
  //h= new Human[1];
for(var i =0; i<h.length; i++) {
    h[i]=new Human(width/2, height/2);
}
}

function draw() {
  background(128);
  for (var i =0; i<b.length; i++) {
    b[i].show();
    b[i].move();
    
  }
  for (var i=0; i<h.length; i++) {
   h[i].show();
   h[i].move();
  }
}


class Bacteria {
   
  

 
  constructor( x, y) {
    this.x = x;
    this.y = y;
  }
  move() {
    this.x= this.x + (int)(Math.random()*5)-2;
    this.y= this.y + (int)(Math.random()*5)-2;
    if (mouseX>this.x)
      this.x= this.x + (int)(Math.random()*7);
    else if (mouseX<this.x)
      this.x= this.x - (int)(Math.random()*7);
      if (mouseY>this.y)
      this.y= this.y + (int)(Math.random()*7);
    else if (mouseY<this.y)
      this.y= this.y - (int)(Math.random()*7);
      fill(0);
      if(mouseY!=this.y && mouseX!=this.x){
        textSize(29);
      text("Run away for the Green Zombies!!",10,100);
      }
      fill(0);
      if(mouseY==this.y && mouseX==this.x){
      background(255,0,0);
      text("You are Infected" +"\n" + "Good Luck Next Time.",10,400);
      }
  }
 show() {
    fill(0,128,0);
    ellipse(this.x, this.y, 30, 30);
  }
}
class Human {
  

  
  constructor( x, y) {
    this.x = x;
    this.y = y;
  }
   move() {
    this.x= mouseX;
    this.y= mouseY;
    
  }
   show() {
    fill(0,0,128);
    
    ellipse(this.x, this.y, 30, 30);
    
  }
}