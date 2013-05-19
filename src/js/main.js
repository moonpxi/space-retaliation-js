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
  var x = 0;

  this.update = function() {};

  this.draw = function() {
    drawer.clear();
    drawer.drawRect("#FF0000", x, 10, 100, 200);
    x += 1;
  };

  setInterval(function() {
    update();
    draw();
  }, 1000/ fps);
}
