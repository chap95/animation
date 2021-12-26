class Box {
  width = 100;
  height = 100;
  constructor(x, y, movement, index) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.movement = movement;
    this.draw();
  }

  draw() {
    context.fillStyle = 'rgba(0,0,0,0.5)';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = 'white';
    context.fillText(this.index, this.x + 30, this.y + 30);
  }
}