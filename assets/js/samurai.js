function Samurai(arena) {
  this.$arena = arena;
  this.x = Math.random() * this.$arena.width();
  this.y = Math.random() * this.$arena.height();
  this.dir = "sitting there like a lazybutt";
  this.speed = 2;
  this.height = 17;
  this.width = 17;
  this.name = 'samurai';
  this.initDisplay();
}

Samurai.prototype.initDisplay = Ninja.prototype.initDisplay;
Samurai.prototype.updateDisplay = Ninja.prototype.updateDisplay;