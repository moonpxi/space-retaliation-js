describe("Player", function() {
  var player;

  beforeEach(function() {
    var ship = new Spaceship({x: 10, y: 20, width: 30, height: 40});
    player = new Player(ship);
  });

  it("moves player to the left", function() {
    player.act("left")

    expect(player.spaceship.x).toEqual(6);
  });

  it("moves player to the right", function() {
    player.act("right")

    expect(player.spaceship.x).toEqual(14);
  });
});
