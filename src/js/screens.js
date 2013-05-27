var GameScreen = function() {
  var level = new Level();

  this.update = function() {
    level.update(Logic.playerControls,
                 Logic.playerControls);
  };

  this.draw = function(drawer) {
    drawer.drawRect("#FF0000", level.player.spaceship.x, 
                               level.player.spaceship.y,
                               level.player.spaceship.width,
                               level.player.spaceship.height);
  };
}
