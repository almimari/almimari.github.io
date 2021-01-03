
let hourArray = ['#000000', '#000033', '#00003E', '#00004E', '#000053', '#003770', '#005BBD', '#FC9C79', '#DEFDFE', '#9BE1FF', '#83E5FF', '#A7E6FF', '#A7E6FF', '#A7E6FF', '#A7E6FF', '#A7E6FF', '#9ACAFF', '#FF4E40', '#27357A', '#1A277A', '#0B0070', '#090057', '#090048', '#090026' ];
let myFont;
var c1, c2;

function preload() {
  myFont = loadFont('Karrik-Regular.otf');

}


function setup() {

  createCanvas(windowWidth,windowHeight)
  c1 = color(255, 255, 255, 100);
  c2 = color(0, 0, 0, 100);

   }

  


// draw() is a loop that runs automatically 60 times a second
function draw() {

//HOUR
//if the hour changes, make the background color the color of the sky defined in hourArray
background(color(hourArray[hour()-1]));


//inner rectangle
push();
  blendMode(LIGHTEST);
  rectMode(CENTER);
  // tint(255, 0);
  fill((hour())*0.1, 200, 200);
  rect(width/2, height/2, width-50, height-50, 20);
pop();


//MINUTES
//a circle that counts the minutes, divided by 60 so that once an hour is reached the circle reaches the whole screen

push();
    //GRADIENT OVERLAY
    for (var y = 0; y < height; y++) {
        var inter = map(y, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(0, y, width, y);
      }

      //MINUTE CONCENTRIC CIRCLE #1
      blendMode(OVERLAY);
      let myColor = map(minute(),0,60,0,10);
      let minuteX = minute()*(width/60);
      let minuteY =minute()*(width/60);
      let from = color(minute()*2, 200, 50, 50);
      let to = color(minute()*2,  200, 50, 50);
      colorMode(RGB, 100);
      interColor = lerpColor(from, to, myColor);
      fill(interColor)
      noStroke();
      ellipse(width/2,height/2,minuteX,minuteY);

      //MINUTE CONCENTRIC CIRCLE #2
      let minuteX2 = minute()*(width/100);
      let minuteY2 =minute()*(width/100);
      let from2 = color(minute()*2, 100, 25, 100);
      let to2 = color(minute()*2, 100, 60, 100);
      colorMode(RGB, 100);
      interColor2 = lerpColor(from2, to2, myColor);
      fill(interColor2)
      ellipse(width/2,height/2,minuteX2,minuteY2);

      //MINUTE CONCENTRIC CIRCLE #3
      let minuteX3 = minute()*(width/180);
      let minuteY3 =minute()*(width/180);
      let from3 = color(5, minute*0.5, 5, 100);
      let to3 = color(5, minute*0.5, 5, 100);
      colorMode(RGB, 100);
      interColor3 = lerpColor(from3, to3, myColor);
      fill(interColor3)
      ellipse(width/2,height/2,minuteX3,minuteY3);

pop();

filter(BLUR, 5);


//SECONDS
//one dot for every second, making a circle like a loading ball
push();
      filter(BLUR, 0);
      blendMode(BLEND);
      ellipseMode(CENTER);
      noStroke()
      var r = 100;
      let theta = map(second(),0,60,0,TWO_PI)
      var cx = r*cos(theta);
      var cy = r*sin(theta);
      translate(width/2, height/2)
      fill(255, 150, map(second(), 0, 60, 200, 0))
      ellipse(cx,cy,20,20);

      //trying to make it so that when the mouse hovers over the seconds circle, it changes color
      // if ((cx-25)<=mouseX<=(cx+25) && (cy-25)<=mouseY<=(cy+25)) {
      //   fill("black");
      // } else {
      //   fill(255, 150, map(second(), 0, 60, 200, 0))
      // }

pop();




//MESSAGE FOR USER
push();

push();
  // filter(BLUR, 5);
  stroke(mouseX*0.07);
  strokeWeight(3);
pop();

  filter(BLUR, 0);
  fill(mouseX*0.07);
  let morning = "Good morning."
  let afternoon = "Good afternoon."
  let night = "Good night."
  
  textSize(100);
  textFont(myFont);


if (hour()>=0 && hour()<6) {

    text(night, (width/2)-(textWidth(night)/2), (height/2));

  } else if (hour()>=6 && hour()<12) {

    text(morning, (width/2)-(textWidth(morning)/2), (height/2));

  } else if (hour() >=12 && hour()<18) {

    text(afternoon, (width/2)-(textWidth(afternoon)/2), (height/2));

  } else if (hour()>=18 && hour()<24) {

    text(night, (width/2)-(textWidth(night)/2), (height/2));

  }

pop();

}

