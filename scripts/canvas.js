/* /////////////////////////////// Canvas ////////////////////////////////*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/* stroke properties */
ctx.lineWidth = 20;
ctx.lineJoin = 'round';
ctx.strokeStyle = "#FFFFFF";

/* stroke path */
ctx.beginPath();
ctx.moveTo(20, 0);
ctx.lineTo(60, 150);
ctx.lineTo(100, 0);
ctx.lineTo(140, 150);
ctx.lineTo(180, 0);
ctx.lineTo(220, 150);
ctx.moveTo(160, 100);
ctx.lineTo(200, 100);
ctx.stroke();

