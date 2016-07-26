 var ranNum = Math.random() * 10;
 if (ranNum <= 3) {
  var tree = document.getElementById("window");
  var img1 = tree.getContext("2d");
  window.onload = function() {
   var img = document.getElementById("forest");
   img1.drawImage(img, 0, 0);
  };
 }
 else if (ranNum <= 6) {
  var moon = document.getElementById("window");
  var img2 = moon.getContext("2d");
  window.onload = function() {
   var img = document.getElementById("Space");
   img2.drawImage(img, 0, 0);
  };

 }
 else {
  var sand = document.getElementById("window");
  var img3 = sand.getContext("2d");
  window.onload = function() {
   var img = document.getElementById("desert");
   img3.drawImage(img, 0, 0);
  };
 }