var Entity = function(spec) {
  var that = {}

  that.x = spec.x;
  that.y = spec.y;
  that.width = spec.width;
  that.height = spec.height;
  
  that.move = function(dx, dy) {
    that.x += dx;
    that.y += dy;
  }

  return that;
};

var Spaceship = function(spec) {
  var that = Entity(spec);

  return that;
}
