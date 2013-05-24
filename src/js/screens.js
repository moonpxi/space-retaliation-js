var GameScreen = function() {
  var spaceship = new Spaceship({ x: 10, y: 10, width: 200, height: 50});
  spaceship.x += 30;

  this.update = function() { };

  this.draw = function(drawer) {
    drawer.drawRect("#FF0000", spaceship.x, 
                               spaceship.y,
                               spaceship.width,
                               spaceship.height);
  };
}
