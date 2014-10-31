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
  this.$ninja.css('position', 'relative');
  this.$ninja.css('background-image', 'url("assets/img/ninja.gif")');
  this.$ninja.css('background-repeat', 'no-repeat');
  this.$ninja.css('height', 17);
  this.$ninja.css('width', 17);
  
  this.updateDisplay();
}

Ninja.prototype.move = function() {
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
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

Mousetrap.bind('right', function() {
  console.log('RIGHT');
})
Mousetrap.bind('right', function() {
  console.log('RIGHT');
})
Mousetrap.bind('right', function() {
  console.log('RIGHT');
})
Mousetrap.bind('right', function() {
  console.log('RIGHT');
})

$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);
});
