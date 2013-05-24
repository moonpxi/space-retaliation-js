var Config = {
  FPS: 30
}

window.onload = function() {
  var canvas = document.getElementById("game"),
      context = canvas.getContext("2d")
      drawer = new Drawer(canvas, context);
  
  GameLoop(drawer, Config.FPS, new GameScreen());
}

function GameLoop(drawer, fps, screen) {

  this.update = function() {
    screen.update();
  };

  this.draw = function() {
    drawer.clear();
    screen.draw(drawer);
  };

  setInterval(function() {
    update();
    draw();
  }, 1000/ fps);
}
