// 引用元： https://p5js.org/reference/#/p5/orbitControl

function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
}

function draw() {
  background(200);
  orbitControl();
  rotateY(0.5);
  box(width*0.4, height*0.4);
}
