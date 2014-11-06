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
  this.sprite = {left: 'url("./assets/img/samurai-left.gif")', right: 'url("./assets/img/samurai-right.gif")'};
}

['initDisplay', 'updateDisplay', 'move', 'inBounds', 'setDirection', 'destroy'].forEach(function (methodName) {
  Samurai.prototype[methodName] = Ninja.prototype[methodName];
});

Samurai.prototype.checkCollision = function(object) {
  return (this.x < object.x + object.width &&
   this.x + this.width > object.x &&
   this.y < object.y + object.height &&
   this.height + this.y > object.y);
}

Samurai.prototype.track = function(ninja) {
  //console.log(ninja);
  diff_x = Math.abs(this.x - ninja.x);
  diff_y = Math.abs(this.y - ninja.y);
  if (diff_x > diff_y) {
   if (this.x > ninja.x) {
      this.setDirection('left');
    }
    if (this.x < ninja.x) {
      this.setDirection('right');
    }
  } else {
   if (this.y < ninja.y) {
      this.setDirection('down');
    }
    if (this.y > ninja.y) {
      this.setDirection('up');
    }
  }
}