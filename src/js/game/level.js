var Level = function() {
  this.player = new Spaceship({ x: 350, y: 520, width: 100, height: 20 }); 

  this.update = function() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i](this);
    }
  }
};
