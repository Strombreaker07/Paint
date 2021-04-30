var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "black";
width = 1;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e) 
{
    color = document.getElementById("input_color").value;
    width = document.getElementById("input_width").value;
    radius = document.getElementById("input_radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) 
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last position of x and y = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_x;
    last_position_of_y = current_y;
}
    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e) 
{
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) 
{
    mouseEvent = "mouseleave";
}

