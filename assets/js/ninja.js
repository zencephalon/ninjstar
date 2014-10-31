function Ninja(arena) {
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() / 2;
  this.dir = "sitting there like a lazybutt";
  this.speed = 3;
  this.height = 17;
  this.width = 17;
  this.initDisplay();
}

Ninja.prototype.initDisplay = function() {
  this.$ninja = $("<div class='ninja'></div>")
  $('#arena').append(this.$ninja);

  this.updateDisplay();
}

Ninja.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}

Ninja.prototype.inBounds = function() {
  return (this.x > this.width / 2 && this.x < this.$arena.width() - this.width / 2 &&
  this.y > this.height / 2 && this.y < this.$arena.height() - this.height / 2)
}

Ninja.prototype.updateDisplay = function() {
  this.$ninja.css('top', this.y - this.height / 2);
  this.$ninja.css('left', this.x - this.width / 2);
}

Ninja.classMethod = function() {

}

function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);
}

Game.prototype.loop = function() {
  this.ninja.move();
}


$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  ['left', 'right', 'up', 'down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.ninja.dir = direction;
    });
  });
})
