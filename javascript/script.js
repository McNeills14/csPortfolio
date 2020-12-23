function setup() {
	var canvas=createCanvas(1500, 800);
  canvas.parent('sketch-holder');
}

function draw () {
	background(64,224,208);
		//mountain
			fill(100)
			triangle(0,800,750,0,1500,800)
			fill(255)
			triangle(680,75,750,0,820,75)
	fill(34,139,34);
	rect(00,600,1500,200);
		
		fill(255);
		rect(1400,450,25,150);
    rect(1325,350,100,100);
			
		fill(0);
		rect(1350,350, 25,25);
		rect(1400,350, 25,25);
		rect(1325,375, 25,25);
		rect(1375,375, 25,25);
		rect(1350,400, 25,25);
		rect(1400,400, 25,25);
		rect(1325,425, 25,25);
		rect(1375,425, 25,25);
		
		//body
		fill(0);
		rect(600,175,25,300);
		
		//right leg
		rect(625,450,125,25);
		rect(725,475,25,125);
		
		//left leg
		quad(600,450,625,465,500,540,480,525)
		quad(400,450,515,515,480,525,370,460)
		
		
		
		//right arm
		rect(625,225,125,25)
		rect(725,100,25,125)
			
		//left arm
		rect(500,225,125,25)
		rect(500,225,25,125)
		
		//head
			ellipse(613,150,100,100)
			
			//words
			textSize(100);
			text("Run Hard : Win Fast", 350, 725);			
}
