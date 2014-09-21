function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);
}

function Ninja($arena) {
  this.x = $arena.width() / 2;
  this.y = $arena.height() / 2;
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
