Game = {
  arena: function() {
    return $('#arena');
  },
  loop: function() {
    console.log("Hello");
  },
  init: function() {
    this.arena().append("<div id='ninja'></div>");
  }
}