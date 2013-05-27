var GameScreen = function() {
  var level = new Level();

  this.update = function(input) {
    console.log(input.keys);

    level.update(Logic.playerControls);
  };

  this.draw = function(drawer) {
    drawer.drawRect("#FF0000", level.player.x, 
                               level.player.y,
                               level.player.width,
                               level.player.height);
  };
}
