var canvas = document.getElementById('the-canvas');
var ctx = canvas.getContext('2d');

function ellipse(context, cx, cy, rx, ry, colorFill, colorStroke) {
    context.save(); // save state
    context.beginPath();

    context.translate(cx - rx, cy - ry);
    context.scale(rx, ry);
    context.arc(1, 1, 1, 0, 2 * Math.PI, false);
    context.fillStyle = colorFill;
    context.fill();
    context.strokeStyle = colorStroke;
    context.restore(); // restore to original state
    context.stroke();
    context.closePath();
}

//the man with the hat
ellipse(ctx, 200, 240, 60, 50, 'aqua');
ellipse(ctx, 180, 265, 20, 5, 'aqua', 'black');
ctx.closePath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'blue';
ellipse(ctx, 200, 200, 50, 15, 'blue', 'black');
ctx.beginPath();
ctx.moveTo(170, 100);
ctx.lineTo(170, 200);
ctx.stroke();
//ctx.moveTo(170, 200);
ctx.quadraticCurveTo(200, 210, 230,200);
ctx.lineTo(230, 100);
ctx.fill();
ctx.stroke();
ellipse(ctx, 200, 100, 30, 10, 'blue', 'black');


ctx.beginPath();
ctx.moveTo(180, 230);
ctx.lineTo(160, 250);
ctx.lineTo(180, 250);
ctx.stroke();

ellipse(ctx, 165, 230, 10, 5, 'aqua', 'black');
ellipse(ctx, 163, 230, 2, 5, 'blue', 'black');
ellipse(ctx, 200, 230, 10, 5, 'aqua', 'black');
ellipse(ctx, 198, 230, 2, 5, 'blue', 'black');


//the bicycle

ellipse(ctx, 220, 400, 50, 50, 'aqua', 'black');
ellipse(ctx, 410, 400, 50, 50, 'aqua', 'black');

ctx.strokeStyle = 'blue';
ctx.moveTo(220, 400);
ctx.lineTo(320, 400);
ctx.lineTo(400, 330);
ctx.lineTo(280, 330);
ctx.lineTo(220, 400);
ctx.stroke();
ctx.closePath();

ellipse(ctx, 320, 400, 15, 15, 'none', 'blue');
ctx.beginPath();
ctx.moveTo(330, 410);
ctx.lineTo(340, 420);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(310, 390);
ctx.lineTo(300, 380);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(320, 400);
ctx.lineTo(280, 330);
ctx.lineTo(267, 310);
ctx.lineTo(250, 310);
ctx.lineTo(287, 310);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(410, 400);
ctx.lineTo(400, 330);
ctx.lineTo(395, 300);
ctx.lineTo(375, 310);
ctx.stroke();
ctx.moveTo(395, 300);
ctx.lineTo(425, 275);
ctx.stroke();
ctx.closePath();


//house

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'brown';
ctx.rect(500, 200, 260, 200);
ctx.stroke();
ctx.moveTo(500, 200);
ctx.lineTo(630, 100);
ctx.lineTo(760, 200);
ctx.stroke();
ctx.fill();
ctx.moveTo(500, 200);
ctx.lineTo(760, 200);
ctx.stroke();
ctx.closePath();

//windows

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.rect(510, 210, 50, 30);
ctx.rect(570, 210, 50, 30);
ctx.rect(510, 250, 50, 30);
ctx.rect(570, 250, 50, 30);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(640, 210, 50, 30);
ctx.rect(700, 210, 50, 30);
ctx.rect(640, 250, 50, 30);
ctx.rect(700, 250, 50, 30);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(640, 300, 50, 30);
ctx.rect(700, 300, 50, 30);
ctx.rect(640, 340, 50, 30);
ctx.rect(700, 340, 50, 30);
ctx.fill();
ctx.stroke();
ctx.closePath();

//door
ctx.beginPath();
ctx.moveTo(520, 400);
ctx.lineTo(520, 320);
ctx.quadraticCurveTo(565, 280, 610, 320);
ctx.lineTo(610, 400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(565, 300);
ctx.lineTo(565, 400);
ctx.stroke();
ellipse(ctx, 555, 365, 4, 4, 'none', 'black');
ellipse(ctx, 575, 365, 4, 4, 'none', 'black');
ctx.closePath();

//smokestack
ctx.beginPath();
ctx.moveTo(700, 110);
ctx.lineTo(700, 180);
ctx.moveTo(720, 180);
ctx.lineTo(720, 110);
ctx.lineTo(700, 110);
ctx.fillStyle = 'brown';
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle = 'brown';
ctx.moveTo(700, 180);
ctx.lineTo(700, 110);
ctx.lineTo(720, 180);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = 'black';
ellipse(ctx, 710, 110, 10, 2, 'brown', 'black');