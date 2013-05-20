var Config = {
  FPS: 30
}

window.onload = function() {
  var canvas = document.getElementById("game"),
      context = canvas.getContext("2d")
      drawer = new Drawer(canvas, context);
  
  GameLoop(drawer, Config.FPS);
}

function GameLoop(drawer, fps) {
  var spaceship = new Spaceship({ x: 10, y: 10}, { width: 200, height: 50});
  spaceship.position.x += 30;

  this.update = function() {};

  this.draw = function() {
    drawer.clear();
    drawer.drawRect("#FF0000", spaceship.position.x, 
                               spaceship.position.y,
                               spaceship.dimension.width,
                               spaceship.dimension.height);
  };

  setInterval(function() {
    update();
    draw();
  }, 1000/ fps);
}
