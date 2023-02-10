// 引用元： https://p5js.org/examples/dom-video-capture.html

let capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0);
}
