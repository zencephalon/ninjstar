function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);
}

function Ninja($arena) {
  this.x = 400;
  this.y = 400;
  this.$arena = $arena;
  this.init();
}

Ninja.prototype.init = function() {
  this.$arena.append("<div id='ninja'></div>");
}

$(document).ready(function() {
  game = new Game();
});
