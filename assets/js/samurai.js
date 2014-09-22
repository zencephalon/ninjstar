function Samurai($arena, ninja, x, y) {
  this.$arena = $arena;
  this.ninja = ninja;

  this.x = x;
  this.y = y;

  this.$html = $("<div class='samurai'></div>");
  this.$html.css("position", "relative");
  this.$html.css("background-image", "url('assets/img/samurai-left.gif')")
  this.$html.css("width", 19);
  this.$html.css("height", 18);
  this.$arena.append(this.$html);
  this.dir = 5;
  this.speed = 2;

  this.sprite_right = "url('assets/img/samurai-right.gif')";
  this.sprite_left = "url('assets/img/samurai-left.gif')";
  //this.updatePosition();
}

Samurai.prototype.move = function() {
  if (this.x > this.ninja.x) {
    this.x -= this.speed;
  } else if (this.x < this.ninja.x) {
    this.x += this.speed;
  }
  if (this.y < this.ninja.y) {
    this.y += this.speed;
  } else if (this.y > this.ninja.y) {
    this.y -= this.speed;
  }
  this.updatePosition();
}

Samurai.prototype.updatePosition = Ninja.prototype.updatePosition;