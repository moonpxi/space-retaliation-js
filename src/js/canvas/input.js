var Input = function(canvas) {
  var self = this;

  this.keys = {};

  this.keyDown = function(event) {
    self.keys[event.keyCode] = true;
  };

  this.keyUp = function(event) {
    self.keys[event.keyCode] = false;
  };

  canvas.addEventListener("keydown", this.keyDown);
  canvas.addEventListener("keyup", this.keyUp);
}
