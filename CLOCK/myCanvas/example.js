function setup() {
//   These lines set up the basic background and color
  createCanvas(windowWidth,windowHeight)
  background(155)
  stroke('red')
  //the time
    textSize(32);
 // Setting text in P5 is not the best use of it
 
   }

  



//we are ready for draw()
// draw() is a loop that runs automatically 60 times a second
function draw() {
  //this background is really important!
	background(155)

	   let theTime = hour() + ":" + minute() + ":" + second();
	   fill('black')
 text(theTime,40,40)
 noStroke()

  //a line that rotates around an ellipse

 ellipse(width/2,height/2,400,400)
 stroke(200)

 let theta = map(second(),0,60,0,TWO_PI)
 			var xposition = width/2+200*cos(theta) //cos() gets the x position
			var yposition = height/2+200*sin(theta) //sin() gets the y position

 line(width/2,height/2,xposition,yposition)

//one dot for every second

  for (var i=0; i < second();i++) {
      if (i%2==1) {
        fill('blue')
      } else {
        fill('yellow')
      }
      ellipse(i*8,50,5,5);
    }

//a dot that moves with every second and turns at 30 seconds
    fill(50)
    if (second() > 30) {
    	    ellipse(30*8,75+(second()-30)*5,10,10);

    } else {
    	    ellipse(second()*8,75,10,10);
    }
//a rectangle that moves and get longer with every second
    rect(40+second()*4,100,20,10*second())

}