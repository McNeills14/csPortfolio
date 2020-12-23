
var numDice=5;
var spacer=100;
var size=75;
var xloc;
var yloc;
var offset;
function setup() {
  createCanvas(1000, 1000);
  offset=(size+spacer)*numDice;//caclulations determine proportions for size, spacer, numDice, and width
  xloc=(width-offset)/2;
  yloc=(height-offset)/2;
}
function draw() {
  background(0);
  noLoop();
  translate(xloc, yloc);
  
    for (var j = 0; j < numDice; j++) {//no need for an array...just use a nested loop
      var dice = new Die(j*(size+spacer)+70, (size+spacer)+100, size);//place dice across and down
      dice.show();
    }
  
}

function mousePressed() {
  loop();
}

class Die {
 constructor(x, y, size) {
    this.num = (int)(random(1, 7));
    this.x = x;
    this.y = y;
    this.size=size;
  }
  roll() {
    num=(int)(random(1,7));
  }
  
 show(){
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.size, this.size, 5);
    textSize(50);
    fill(0);
    text(this.num, this.x + 22, this.y +55);
    fill(255,0,0);
    text("Can you get a Yahtzee!?!?", 125, 100);
    textSize(45);
    text("There is only a .077% chance of getting it",0,500);
    text("So get Clicking!!!!",250,600);
    textSize(25);
    fill(0);
    text("(The highest score you can get in a single round of Yahztee" + "\n" + "is a 5 of a kind. For example, rolling all 3's will be a Yahtzee!)", 75, 150);
  }
  
}
 