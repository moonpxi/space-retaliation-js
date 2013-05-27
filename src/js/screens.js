var GameScreen = function() {
  var level = new Level();

  this.update = function() {
    level.player.act("left");
  };

  this.draw = function(drawer) {
    drawer.drawRect("#FF0000", level.player.spaceship.x, 
                               level.player.spaceship.y,
                               level.player.spaceship.width,
                               level.player.spaceship.height);
  };
}
