function Ninja() {
  this.x = 300;
  this.y = 300;
  this.updateDisplay = function() {
    console.log(this.x);
    console.log(this.y);
  }
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