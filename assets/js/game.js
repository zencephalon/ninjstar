function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);
  this.samurai = [new Samurai(this.$arena), new Samurai(this.$arena)];
  this.shurikens = [];
}

Game.prototype.loop = function() {
  this.ninja.move();
  ninja = this.ninja;
  this.samurai.forEach(function (samurai) {
    samurai.track(ninja);
    samurai.move();
  });
  this.shurikens.forEach(function (shuriken) {
    shuriken.move();
    if (shuriken.outOfBounds) {
      shuriken.destroy();
    }
  });
  this.shurikens = _(this.shurikens).reject(function(shuriken) { return shuriken.outOfBounds });
}

Game.prototype.throwShuriken = function() {
  console.log(this.ninja.dir);
  this.shurikens.push(new Shuriken(this.$arena, this.ninja.dir, this.ninja.x, this.ninja.y));
}

$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  ['left', 'right', 'up', 'down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.ninja.setDirection(direction);
    });
  });

  Mousetrap.bind('space', function() {
    game.throwShuriken();
  })
})