function Shuriken(arena, direction, x, y) {
  this.$arena = arena;
  this.x = x;
  this.y = y;
  this.dir = direction;
  this.speed = 5;
  this.height = 16;
  this.width = 16;
  this.name = 'shuriken';
  this.initDisplay();
}

Shuriken.prototype.destroy = function() {
  this.$sprite.remove();
}

Shuriken.prototype.initDisplay = Ninja.prototype.initDisplay;
Shuriken.prototype.updateDisplay = Ninja.prototype.updateDisplay;
Shuriken.prototype.move = Ninja.prototype.move;
Shuriken.prototype.inBounds = Ninja.prototype.inBounds;