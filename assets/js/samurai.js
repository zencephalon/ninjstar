function Samurai($arena, ninja) {
  this.x = 0;
  this.y = 0;
  this.ninja = ninja;
  this.$arena = $arena;

  this.init();
}

Ninja.prototype.init = function() {
  this.$html = $("<div class='samurai'></div>");
  this.$arena.append(this.$html);
  this.$html.css('position', 'relative');
  this.speed = 2;
  this.updatePosition();
}