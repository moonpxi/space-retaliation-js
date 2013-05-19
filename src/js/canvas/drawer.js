var Drawer = function(context) {

  this.drawRect = function(color, x, y, width, height) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }

}
