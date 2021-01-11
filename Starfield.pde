float x;
float y;
float radius=2;
float angle=.01;
boolean sw=false;
double pie = 0;
Particle[]s;

void setup() {
  size(900, 600);
  s=new Particle[100];
  //for (int i=0; i<s.length; i++) {
  //s[i]=new Star((float)(Math.random()*300)+20, (float)(Math.random()*300)+20);
  //s[i]=new Star(width/2, height/2);
  //}

  for ( int i = 0; i< s.length; i++) {
    s[i]=new NormalParticle((float)(Math.random()*300)+20, (float)(Math.random()*300)+20);
  }
  for ( int i = 0; i< 1; i++) {
    s[i]=new OddballParticle((float)(Math.random()*300)+20, (float)(Math.random()*300)+20);
  }
  
  //for ( int j = 50; j< s.length-1; j++) {
  //  s[j] = new OddballParticle(pie);
  //  pie += Math.PI/18;
  //}
  //for ( int k = s.length-1; k< s.length; k++) {
  //  s[k] = new JumboParticle(pie);
  //  pie += Math.PI/6;
  //}
}

void draw() {
  
  fill(0, 6);
  rect(0, 0, width, height);

  for (int i=0; i<s.length; i++) {
    s[i].show();
    s[i].move();
  }
  fill(250);
  textSize(50);
  text("Can you find the Oddball smiling?",10,50);
}

void mousePressed() {

  for (int i=0; i<s.length; i++) {
    //s[i]=new Star((float)(Math.random()*300)+20, (float)(Math.random()*300)+20);
    s[i]=new NormalParticle(width/2, height/2);
  }
for (int i=0; i<1; i++) {
  
  s[i]=new OddballParticle(width/2, height/2);
}

}


interface Particle {
  void move();
  void show();
  void randC();
}

class NormalParticle implements Particle {
  float x;
  float y;
  double angle=Math.random()*(2*Math.PI);//random direction

  //float xspeed=.01;
  //float yspeed=.02;
  float xspeed=(float)(Math.random()*5)-2;//random speed
  float yspeed=(float)(Math.random()*10)-5;

  float radius;
  color c1 = color(120, 120 , 120);

  NormalParticle(float x, float y) {
    this.x=x;
    this.y=y;

    radius=(float)(Math.random()*7);
    //radius=(float)(Math.random()*200)-100;
  }

  //your code here
  void show() {
    fill(c1);
    triangle(x,y,x+2,x,x,x);
    //rect(x,y-4,40,5);
    ellipse(x, y, 50, 50);
    fill(0);
    ellipse(x-5, y-5, 3, 3);
    ellipse(x+5, y-5, 3, 3);
    rect(x-15,y+10,30,2);
    
  }

  void move() {
    x+=xspeed;
    y+=yspeed;
    x+=Math.cos(angle)*radius;
    y+=Math.sin(angle)*radius;

    angle+=.01;


    if (x>width-10) {
      x=width-10;
      xspeed*=-1;
      //angle*=-1;
    }
    if (x<10) {
      xspeed*=-1;
    }
    if (y>height-10) {
      y=height-10;
      yspeed*=-1;
    }
    if (y<10) {
      yspeed*=-1;
    }
  }
  void randC() {
  }
}

class OddballParticle implements Particle {
  float x;
  float y;
  double angle=Math.random()*(2*Math.PI);//random direction

  //float xspeed=.01;
  //float yspeed=.02;
  float xspeed=(float)(Math.random()*5)-2;//random speed
  float yspeed=(float)(Math.random()*10)-5;

  float radius;
  color c1 = color(120,120,120);

  OddballParticle(float x, float y) {
    this.x=x;
    this.y=y;

    radius=(float)(Math.random()*7);
    //radius=(float)(Math.random()*200)-100;
  }

  //your code here
  void show() {
    fill(c1);
    triangle(x,y,x+2,x,x,x);
    //rect(x,y-4,40,5);
    ellipse(x, y, 50, 50);
    fill(0);
    ellipse(x-5, y-5, 3, 3);
    ellipse(x+5, y-5, 3, 3);
    arc(x, y+5, 35, 35, 0, 3.14);
    
  }

  void move() {
    x+=xspeed;
    y+=yspeed;
    x+=Math.cos(angle)*radius;
    y+=Math.sin(angle)*radius;

    angle+=.01;


    if (x>width-10) {
      x=width-10;
      xspeed*=-1;
      //angle*=-1;
    }
    if (x<10) {
      xspeed*=-1;
    }
    if (y>height-10) {
      y=height-10;
      yspeed*=-1;
    }
    if (y<10) {
      yspeed*=-1;
    }
  }
  void randC() {
  }
}
