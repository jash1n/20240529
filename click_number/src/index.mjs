import "./styles.css";
for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;
  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);
  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  document.getElementById(num).style.backgroundColor =
    "rgb(" + r + ", " + g + ", " + b + ")";
  var randheight = 30 + Math.floor(Math.random() * 100);
  var randwidth = 30 + Math.floor(Math.random() * 100);
  document.getElementById(num).style.height = "" + randheight + "px";
  document.getElementById(num).style.width = "" + randwidth + "px";
}
var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next += 1;
  }
};
