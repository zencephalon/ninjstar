function Game($arena) {
  this.$arena = $arena;
  this.ninja = new Ninja(this.$arena);
}

Game.prototype.process = function() {
  this.ninja.move();
}

$(document).ready(function() {
  game = new Game($('#arena'));
  Mousetrap.bind("down", function() {
    game.ninja.dir = 2;
  });
  Mousetrap.bind("up", function() {
    game.ninja.dir = 8;

  });
  Mousetrap.bind("left", function() {
    game.ninja.dir = 4;

  });
  Mousetrap.bind("right", function() {
    game.ninja.dir = 6;
  });

  setInterval(game.process.bind(game), 20) // 50 FPS, 20*50 === 1000
});