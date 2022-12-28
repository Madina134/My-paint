var mouseEvent = "";
var color = "";
var width = "";
var last_position_of_x=0;
var last_position_of_y=0;
var width = screen.width
var new_width = screen.width - 70;
var new_heaight = screen.height -300;

canvas= document.getElementById("myCanvas");

canvas.addEventListener("mousedown",my_mousedown);
ctx = canvas.getContext("2d");
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("Last position of x and y coordinates = ");
        console.log("x="+ last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y)

        console.log("Current_position_of_mouse_y coordinates = ");
        console.log("x ="+ current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

if(width<992)
{
    document.getElementById("myCanvas").width
    document.getElementById("myCanvas").heightdocument.body.style.overflow ="hidden";
}

function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

function my_touchmove(e)
{
    console.log("my_touchMove");
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY- canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
    console.log("x="+ last_position_of_x + "y=" + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y)

    console.log("Current_position_of_mouse_y coordinates = ");
    console.log("x ="+ current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x
    last_position_of_y= current_position_of_mouse_y

    
}