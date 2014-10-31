function Ninja() {
  this.x = 300;
  this.y = 300;
  this.initDisplay();
}

Ninja.prototype.initDisplay = function() {
  this.$ninja = $("<div class='ninja'></div>")
  $('#arena').append(this.$ninja);
  this.$ninja.css('position', 'relative');
  this.$ninja.css('top', this.y);
  this.$ninja.css('left', this.x);
  this.$ninja.css('background-image', 'url("assets/img/ninja.gif")');
  this.$ninja.css('background-repeat', 'no-repeat');
  this.$ninja.css('height', 17);
  this.$ninja.css('width', 17);
}

Ninja.prototype.updateDisplay = function() {
  console.log(this.x);
  console.log(this.y);
}

Ninja.classMethod = function() {

}

Game = {
  loop: function() {
    console.log("Hello");
    return "goodbye";
  }
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
  n = new Ninja();
});
