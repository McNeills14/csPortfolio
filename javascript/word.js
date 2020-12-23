function setup() {
  var canvas=createCanvas(600, 400);
  //canvas.parent('sketch-holder');
	background(0);
}

function draw() {
	 textSize(75);
  textFont('Georgia');
	var s ="AP Compsci";
	var r ="Super fun";
	var z = "is";
	//textFont(f);
	
	
	var x = 75;
  var d;
	for(var d=0; d<s.length; d++){
		var c= s.charAt(d);
fill(random(255),random(255),random(255));
		text(c,x,100);
		x=x + textWidth(c);
	
	}
	var q = 265;
  var k;
	for(var k=0; k<z.length; k++){
		var w= z.charAt(k);
fill(random(255),random(255),random(255));
		text(w,q,200);
		q=q + textWidth(w);
	
	}
  var n;
		var p = 110;
	for(var n=0; n<r.length; n++){
		var g= r.charAt(n);
fill(random(255),random(255),random(255));
		text(g,p,300);
		p=p + textWidth(g);
	
	}
}  