var color_white = require("../assets/img/custom/color_white.png");
var color_cyan = require("../assets/img/custom/color_cyan.png");
var color_purple = require("../assets/img/custom/color_purple.png");
var color_pink = require("../assets/img/custom/color_pink.png");
var color_orange = require("../assets/img/custom/color_orange.png");
var no_border = 'none';
var border_red = require("../assets/img/custom/border_red.png");
var border_blue = require("../assets/img/custom/border_blue.png");
var border_yellow = require("../assets/img/custom/border_yellow.png");
var no_logo = 'none';
var circle_green = require("../assets/img/custom/circle_green.png");
var circle_grey = require("../assets/img/custom/circle_grey.png");
var circle_purple = require("../assets/img/custom/circle_purple.png");
var circle_orange = require("../assets/img/custom/circle_orange.png");
var square_green = require("../assets/img/custom/square_green.png");
var square_grey = require("../assets/img/custom/square_grey.png");
var square_purple = require("../assets/img/custom/square_purple.png");
var square_orange = require("../assets/img/custom/square_orange.png");
var triangle_green = require("../assets/img/custom/triangle_green.png");
var triangle_grey = require("../assets/img/custom/triangle_grey.png");
var triangle_purple = require("../assets/img/custom/triangle_purple.png");
var triangle_orange = require("../assets/img/custom/triangle_orange.png");

var tab = [color_white, color_cyan, color_purple, color_pink, color_orange,
          no_border, border_red, border_blue, border_yellow,
          no_logo, circle_green, circle_grey, circle_purple, circle_orange,
          square_green, square_grey, square_purple, square_orange,
          triangle_green, triangle_grey, triangle_purple, triangle_orange];

var buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let img = document.getElementById(buttons[i].classList);
    img.setAttribute('src', tab[i]);
  });
}