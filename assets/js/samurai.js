function Samurai(arena) {
  this.$arena = arena;
  this.x = Math.random() * this.$arena.width();
  this.y = Math.random() * this.$arena.height();
  this.dir = "sitting there like a lazybutt";
  this.speed = 2;
  this.height = 19;
  this.width = 18;
  this.name = 'samurai';
  this.initDisplay();
}

Samurai.prototype.initDisplay = Ninja.prototype.initDisplay;
Samurai.prototype.updateDisplay = Ninja.prototype.updateDisplay;
Samurai.prototype.move = Ninja.prototype.move;
Samurai.prototype.inBounds = Ninja.prototype.inBounds;
Samurai.prototype.track = function(ninja) {
  //console.log(ninja);
  diff_x = Math.abs(this.x - ninja.x);
  diff_y = Math.abs(this.y - ninja.y);
  if (diff_x > diff_y) {
   if (this.x > ninja.x) {
      this.dir = "left";
    }
    if (this.x < ninja.x) {
      this.dir = "right";
    }
  } else {
   if (this.y < ninja.y) {
      this.dir = "down";
    }
    if (this.y > ninja.y) {
      this.dir = "up";
    }
  }
}