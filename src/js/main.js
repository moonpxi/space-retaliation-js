var Config = {
  FPS: 30
}

window.onload = function() {
  var canvas = document.getElementById("game"),
      context = canvas.getContext("2d")
      drawer = new Drawer(canvas, context),
      input = new Input(window);
  
  GameLoop(input, drawer, Config.FPS, new GameScreen());
}

function GameLoop(input, drawer, fps, screen) {

  this.update = function() {
    screen.update(input);
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
