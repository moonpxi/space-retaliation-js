window.onload = function() {
  var canvas = document.getElementById("game"),
      context = canvas.getContext("2d")
      drawer = new Drawer(context);
  
  drawer.drawRect("#FF0000", 10, 10, 100, 200);
}
