function Ninja() {
  this.x = 300;
  this.y = 300;
  this.initDisplay();
}

Ninja.prototype.initDisplay = function() {
  this.$ninja = $("<div class='ninja'>NINJA</div>")
  $('#arena').append(this.$ninja);
  this.$ninja.css('position', 'relative');
  this.$ninja.css('top', this.y);
  this.$ninja.css('left', this.x);
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

$(document).ready(function() {
  n = new Ninja();
});
