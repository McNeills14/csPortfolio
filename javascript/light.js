var startX = 0;
var startY = 150;
var endX = 0;
var endY = 150;

var qstartX = 350;
var qstartY = 0;
var qendX = 150;
var qendY = 0;



function setup() {
  	var canvas=createCanvas(800, 800);
  //canvas.parent('sketch-holder');
	background(0);
	strokeWeight(1);
}

function draw() {

  while(qstartY < 800) {
		stroke((265) , (265) , (0));
qendX = qstartX + (Math.random()*36 -18);
		qendY = qstartY + (Math.random()*9);
		line(qstartX, qstartY, qendX, qendY);
		qstartX = qendX;
		qstartY = qendY;	
		fill(150);
		stroke(150)
		rect(705,350,100,5);
		rect(700,320,5,60)
		triangle(693,380,713,380, 703,400);			triangle(693,300,713,300, 703,340);
textSize(32);
		var v = "This is the worse Lighting Rod ever!!!" ;
		text(v,600,150,200,200);
	}
}
	function mousePressed() {
	startX = 0;
	startY = 350;
	endX = 0;
	endY = 150;
	
	qstartX = 350;
	qstartY = 0;
	qendX = 150;
	qendY = 0;
	
	}
