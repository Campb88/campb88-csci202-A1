let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let s = 0;

let x2 = 220;
let y2 = 80;
let x2speed = 5;
let y2speed = 2;
let s2 = 0;

let x3 = 20;
let y3 = 0;
let x3speed = 5;
let y3speed = 2;
let s3 = 0;

let r = 0;
let g = 0;
let b = 0;

/* let mySound;

function preload() {
  soundFormats('mp3');
  mySound = loadSound('Treefingers.mp3');
} */


function setup() {
  createCanvas(1600, 900);
}

function draw(r, g, b) {
  background(0);
  noStroke();
  fill(r, g, b);
  ellipse(x, y, s, s);
  x += xspeed;
  y += yspeed;
  if (x > width - s || x < s) {
    xspeed = -xspeed;
  }
  if (y > height - s || y < s) {
    yspeed = -yspeed;
  }

  ellipse(x2, y2, s2, s2);
  x2 += x2speed;
  y2 += y2speed;
  if (x2 > width - s2 || x2 < s2 ) {
    x2speed = -x2speed;
  }
  if (y2 > height - s2 || y2 < s2) {
    y2speed = -y2speed;
  }

  ellipse(x3, y3, s3, s3);
  x3 += x3speed;
  y3 += y3speed;
  if (x3 > width - s3 || x3 < s3 ) {
    x3speed = -x3speed;
  }
  if (y3 > height - s3 || y3 < s3) {
    y3speed = -y3speed;
  }
  

}

function mousePressed() {
  /* mySound.play(); */

  draw(random(10, 256), random(10, 256), random(10, 256));
  s = random(50, 200);
  xspeed = random(-10, 10);
  yspeed = random(-10, 10);
  x = mouseX;
  y = mouseY;

  s2 = random(50, 200);
  x2speed = random(-10, 10);
  y2speed = random(-10, 10);
  x2 = mouseX;
  y2 = mouseY;

  s3 = random(50, 200);
  x3speed = random(-10, 10);
  y3speed = random(-10, 10);
  x3 = mouseX;
  y3 = mouseY;
} 
