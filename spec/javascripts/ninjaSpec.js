describe("Ninja", function(){
  var $arena = $('<div class="arena"></div>')
  $arena.width(100);
  $arena.height(100);


  beforeEach( function() {
    ninja = new Ninja($arena);
  });

  it("has an x coordinate of 50", function(){
    expect(ninja.x).toEqual(50);
  });

  it("has an y coordinate of 50", function(){
    expect(ninja.y).toEqual(50);
  });

  it("has a speed of 3", function(){
    expect(ninja.speed).toEqual(3);
  });

  it("has a height of 17", function(){
    expect(ninja.height).toEqual(17);
  });

  it("has a width of 17", function(){
    expect(ninja.width).toEqual(17);
  });

  it("calls the initDisplay function", function(){
    spyOn(Ninja.prototype, "initDisplay");

    miniNinja = new Ninja($arena);
    expect(miniNinja.initDisplay).toHaveBeenCalled();
  });
});
