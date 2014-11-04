function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja(this.$arena);
  this.samurai = [new Samurai(this.$arena), new Samurai(this.$arena)];
}

Game.prototype.loop = function() {
  this.ninja.move();
}


$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  ['left', 'right', 'up', 'down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.ninja.setDirection(direction);
    });
  });
})