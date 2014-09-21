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
}

$(document).ready(function() {
  game = new Game();
});
