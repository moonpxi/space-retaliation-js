var Player = function(spaceship) {
  this.spaceship = spaceship;

  this.act = function(command) {
    if (command == "left") {
      this.spaceship.move(-4, 0);
    } else if (command == "right") {
      this.spaceship.move(4, 0);
    }
  }
}
