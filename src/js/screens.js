var GameScreen = function() {
  var spaceship = new Spaceship({ x: 10, y: 10, width: 200, height: 50}),
      player = new Player(spaceship);

  this.update = function() {
  };

  this.draw = function(drawer) {
    drawer.drawRect("#FF0000", player.spaceship.x, 
                               player.spaceship.y,
                               player.spaceship.width,
                               player.spaceship.height);
  };
}
