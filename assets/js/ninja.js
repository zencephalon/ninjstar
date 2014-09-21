function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);
}

Game.prototype.process = function() {
  this.ninja.move();
}

function Ninja($arena) {
  this.x = $arena.width() / 2;
  this.y = $arena.height() / 2;
  this.dir = 5; 
  /*
  7 8 9
  4 5 6
  1 2 3
  */
  this.$arena = $arena;
  this.init();
}

Ninja.prototype.init = function() {
  this.$arena.append("<div id='ninja'></div>");
  this.$html = $('#ninja');
  this.$html.css('position', 'relative');
  this.speed = 3;
  this.updatePosition();
}

Ninja.prototype.updatePosition = function() {
  this.$html.css('left', this.x);
  this.$html.css('top', this.y);
  if (this.dir == 4) {
    this.$html.css('background-image', 'url("assets/img/ninja-left.gif")');
  }
  if (this.dir == 6) {
    this.$html.css('background-image', 'url("assets/img/ninja-right.gif")');
  }
}

Ninja.prototype.move = function() {
  switch(this.dir) {
    case 2:
      this.y += this.speed;
      break;
    case 8:
      this.y -= this.speed;
      break;
    case 6:
      this.x += this.speed;
      break;
    case 4:
      this.x -= this.speed;
      break;
  }
  this.updatePosition();
}

Ninja.prototype.inBounds = function() {
  return (this.x > 0 && this.x < this.$arena.width() && this.y > 0 && this.y < this.$arena.height())
}

$(document).ready(function() {
  game = new Game();

  Mousetrap.bind('down', function() {
    game.ninja.dir = 2;
  });
  Mousetrap.bind('up', function() {
    game.ninja.dir = 8;
  });
  Mousetrap.bind('left', function() {
    game.ninja.dir = 4;
  });
  Mousetrap.bind('right', function() {
    game.ninja.dir = 6;
  });

  setInterval(game.process.bind(game), 20); // 50 FPS
});
