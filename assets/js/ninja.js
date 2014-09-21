function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);

  Mousetrap.bind('down', function() {
    this.ninja.dir = 2;
  })
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
  this.updatePosition();
}

Ninja.prototype.updatePosition = function() {
  this.$html.css('left', this.x);
  this.$html.css('top', this.y);
}

$(document).ready(function() {
  game = new Game();
});
