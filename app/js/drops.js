class Drop {
  constructor(x, y, r) {
    var options = {
      friction: 0.3,
      resittiution: 1.3,
    };
    x += Math.round(random(-200, 200));
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;

    World.add(world, this.body);
  }
  display() {
    let pos = this.body.position;
    fill("blue");
    noStroke();
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
