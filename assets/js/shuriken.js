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

['initDisplay', 'updateDisplay', 'move', 'inBounds', 'destroy'].forEach(function (methodName) {
  Shuriken.prototype[methodName] = Ninja.prototype[methodName];
});
