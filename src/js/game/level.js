var Level = function() {
  this.player = new Entity({ x: 350, y: 520, width: 100, height: 20 }); 

  this.update = function() {
    var self = this;
    _.each(arguments, function(updateFunc) { updateFunc(self); });
  }
};
