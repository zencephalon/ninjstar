function Samurai($arena, ninja) {
  this.x = 0;
  this.y = 0;
  this.ninja = ninja;
  this.$arena = $arena;
  this.sprite_left = 'url("assets/img/samurai-left.gif")';
  this.sprite_right = 'url("assets/img/samurai-right.gif")';
  this.init();
}

Samurai.prototype.init = function() {
  this.$html = $("<div class='samurai'></div>");
  this.$arena.append(this.$html);
  this.$html.css('position', 'relative');
  this.speed = 2;
  this.updatePosition();
}

Samurai.prototype.updatePosition = Ninja.prototype.updatePosition;