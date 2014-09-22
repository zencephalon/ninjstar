function Samurai($arena) {
  this.x = $arena.width() / 2;
  this.y = $arena.height() / 2;
  this.$arena = $arena;
  this.$html = $("<div class='samurai'></div>");
  this.$html.css("position", "relative");
  this.$html.css("background-image", "url('assets/img/samurai-left.gif')")
  this.$html.css("width", 19);
  this.$html.css("height", 18);
  this.$arena.append(this.$html);
  this.dir = 5;
  this.speed = 3;

  this.sprite_right = "url('assets/img/samurai-right.gif')";
  this.sprite_left = "url('assets/img/samurai-left.gif')";
  //this.updatePosition();
}

Samurai.prototype.updatePosition = Ninja.prototype.updatePosition;