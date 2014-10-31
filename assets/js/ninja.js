function Ninja() {
  this.x = 300;
  this.y = 300;
  this.dir = "right";
  this.speed = 3;
  this.initDisplay();
}

Ninja.prototype.initDisplay = function() {
  this.$ninja = $("<div class='ninja'></div>")
  $('#arena').append(this.$ninja);


  this.updateDisplay();
}

Ninja.prototype.move = function() {
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  this.updateDisplay();
}

Ninja.prototype.updateDisplay = function() {
  this.$ninja.css('top', this.y);
  this.$ninja.css('left', this.x);
}

Ninja.classMethod = function() {

}

function Game() {
  this.$arena = $('#arena');
  this.ninja = new Ninja();
}

Game.prototype.loop = function() {
  this.ninja.move();
}


$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  ['left', 'right', 'up', 'down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.ninja.dir = direction;
    });
  });
})
