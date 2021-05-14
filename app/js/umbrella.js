class Umbrella {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      restitution: 0.1,
      friction: 0.5,
    };

    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    this.r = r;
  }

  display() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    circle(0, 0);
    pop();
  }
}
