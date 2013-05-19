var Drawer = function(canvas, context) {

  this.clear = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.drawRect = function(color, x, y, width, height) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }

}
