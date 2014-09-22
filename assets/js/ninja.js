function Game($arena) {
  this.$arena = $arena;
  this.ninja = new Ninja(this.$arena);
}

Game.prototype.process = function() {
  this.ninja.move();
}

function Ninja($arena) {
  this.x = $arena.width() / 2;
  this.y = $arena.height() / 2;
  this.$arena = $arena;
  this.$html = $("<div id='ninja'></div>");
  this.$html.css("position", "relative");
  this.$html.css("background-image", "url('assets/img/ninja-left.gif')")
  this.$html.css("width", 17);
  this.$html.css("height", 17);
  this.$arena.append(this.$html);
  this.dir = 5;
  this.speed = 3;
  /* 7 8 9
     4 5 6
     1 2 3
     */
  this.updatePosition();
  //this.init();
}

Ninja.prototype.move = function() {
  switch(this.dir) {
    case 2:
      this.y += this.speed;
      break;
    case 4:
      this.x -= this.speed;
      break;
    case 6: 
      this.x += this.speed;
      break;
    case 8:
      this.y -= this.speed;
      break;
  }
  this.updatePosition();
}

Ninja.prototype.updatePosition = function() {
  this.$html.css("top", this.y);
  this.$html.css("left", this.x);
}

// Ninja.prototype.init = function() {
// }

$(document).ready(function() {
  game = new Game($('#arena'));
  Mousetrap.bind("down", function() {
    game.ninja.dir = 2;
  });
  Mousetrap.bind("up", function() {
    game.ninja.dir = 8;

  });
  Mousetrap.bind("left", function() {
    game.ninja.dir = 4;

  });
  Mousetrap.bind("right", function() {
    game.ninja.dir = 6;
  });
});