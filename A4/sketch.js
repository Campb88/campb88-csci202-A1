/* circle 1 */
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let s = 0;

/* circle 2 */
let x2 = 220;
let y2 = 80;
let x2speed = 5;
let y2speed = 2;
let s2 = 0;

/* circle 3 */
let x3 = 20;
let y3 = 0;
let x3speed = 5;
let y3speed = 2;
let s3 = 0;

/* circle 4 */
let x4 = 320;
let y4 = 180;
let x4speed = 5;
let y4speed = 2;
let s4 = 0;

/* circle 5 */
let x5 = 220;
let y5 = 80;
let x5speed = 5;
let y5speed = 2;
let s5 = 0;

/* circle 6 */
let x6 = 20;
let y6 = 0;
let x6speed = 5;
let y6speed = 2;
let s6 = 0;

/* circle 7 */
let x7 = 320;
let y7 = 180;
let x7speed = 5;
let y7speed = 2;
let s7 = 0;

/* circle 8 */
let x8 = 220;
let y8 = 80;
let x8speed = 5;
let y8speed = 2;
let s8 = 0;

/* circle 9 */
let x9 = 20;
let y9 = 0;
let x9speed = 5;
let y9speed = 2;
let s9 = 0;

/* colors */
let r = 0;
let g = 0;
let b = 0;

function disappear() {
  var icon = document.getElementById("icon");
  icon.style.display= "none";
  var audio = document.getElementById("myAudio");
  audio.play();
}


function setup() {
  createCanvas(1600, 900);
}

function draw(r, g, b) {
  background(0);
  noStroke();
  fill(r, g, b);

  /* circle 1 */
  ellipse(x, y, s, s);
  x += xspeed;
  y += yspeed;
  if (x > width - s || x < s) {
    xspeed = -xspeed;
  }
  if (y > height - s || y < s) {
    yspeed = -yspeed;
  }

  /* circle 2 */
  ellipse(x2, y2, s2, s2);
  x2 += x2speed;
  y2 += y2speed;
  if (x2 > width - s2 || x2 < s2 ) {
    x2speed = -x2speed;
  }
  if (y2 > height - s2 || y2 < s2) {
    y2speed = -y2speed;
  }

  /* circle 3 */
  ellipse(x3, y3, s3, s3);
  x3 += x3speed;
  y3 += y3speed;
  if (x3 > width - s3 || x3 < s3 ) {
    x3speed = -x3speed;
  }
  if (y3 > height - s3 || y3 < s3) {
    y3speed = -y3speed;
  }
  
  /* circle 4 */
  ellipse(x4, y4, s4, s4);
  x4 += x4speed;
  y4 += y4speed;
  if (x4 > width - s4 || x4 < s4) {
    x4speed = -x4speed;
  }
  if (y4 > height - s4 || y4 < s4) {
    y4speed = -y4speed;
  }

  /* circle 5 */
  ellipse(x5, y5, s5, s5);
  x5 += x5speed;
  y5 += y5speed;
  if (x5 > width - s5 || x5 < s5 ) {
    x5speed = -x5speed;
  }
  if (y5 > height - s5 || y5 < s5) {
    y5speed = -y5speed;
  }

  /* circle 3 */
  ellipse(x6, y6, s6, s6);
  x6 += x6speed;
  y6 += y6speed;
  if (x6 > width - s6 || x6 < s6 ) {
    x6speed = -x6speed;
  }
  if (y6 > height - s6 || y6 < s6) {
    y6speed = -y6speed;
  }

  /* circle 7 */
  ellipse(x7, y7, s7, s7);
  x7 += x7speed;
  y7 += y7speed;
  if (x7 > width - s7 || x7 < s7) {
    x7speed = -x7speed;
  }
  if (y7 > height - s7 || y7 < s7) {
    y7speed = -y7speed;
  }

  /* circle 8 */
  ellipse(x8, y8, s8, s8);
  x8 += x8speed;
  y8 += y8speed;
  if (x8 > width - s8 || x8 < s8 ) {
    x8speed = -x8speed;
  }
  if (y8 > height - s8 || y8 < s8) {
    y8speed = -y8speed;
  }

  /* circle 9 */
  ellipse(x9, y9, s9, s9);
  x9 += x9speed;
  y9 += y9speed;
  if (x9 > width - s9 || x9 < s9 ) {
    x9speed = -x9speed;
  }
  if (y9 > height - s9 || y9 < s9) {
    y9speed = -y9speed;
  }

}

function mousePressed() {
  /* mySound.play(); */

  draw(random(10, 256), random(10, 256), random(10, 256));
  
  /* circle 1 */
  s = random(50, 200);
  xspeed = random(-10, 10);
  yspeed = random(-10, 10);
  x = mouseX;
  y = mouseY;

  /* circle 2 */
  s2 = random(50, 200);
  x2speed = random(-10, 10);
  y2speed = random(-10, 10);
  x2 = mouseX;
  y2 = mouseY;

  /* circle 3 */
  s3 = random(50, 200);
  x3speed = random(-10, 10);
  y3speed = random(-10, 10);
  x3 = mouseX;
  y3 = mouseY;

  /* circle 4 */
  s4 = random(50, 200);
  x4speed = random(-10, 10);
  y4speed = random(-10, 10);
  x4 = mouseX;
  y4 = mouseY;

  /* circle 5 */
  s5 = random(50, 200);
  x5speed = random(-10, 10);
  y5speed = random(-10, 10);
  x5 = mouseX;
  y5 = mouseY;

  /* circle 6 */
  s6 = random(50, 200);
  x6speed = random(-10, 10);
  y6speed = random(-10, 10);
  x6 = mouseX;
  y6 = mouseY;
  
  /* circle 1 */
  s7 = random(50, 200);
  x7speed = random(-10, 10);
  y7speed = random(-10, 10);
  x7 = mouseX;
  y7 = mouseY;

  /* circle 8 */
  s8 = random(50, 200);
  x8speed = random(-10, 10);
  y8speed = random(-10, 10);
  x8 = mouseX;
  y8 = mouseY;

  /* circle 9 */
  s9 = random(50, 200);
  x9speed = random(-10, 10);
  y9speed = random(-10, 10);
  x9 = mouseX;
  y9 = mouseY;
} 
