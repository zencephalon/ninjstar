function Game($arena) {
  this.$arena = $arena;
  this.ninja = new Ninja(this.$arena);
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
  this.updatePosition();
  //this.init();
}

Ninja.prototype.updatePosition = function() {
  this.$html.css("top", this.y);
  this.$html.css("left", this.x);
}

// Ninja.prototype.init = function() {
// }

$(document).ready(function() {
  game = new Game($('#arena'));
});