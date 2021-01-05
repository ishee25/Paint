var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color= "black";
width_line= 1;
radius= 20;

canvas.addEventListener("mousedown", my_Mousdown);
function my_Mousdown(e){
    color=document.getElementById("circleColor").value;
    width_line = document.getElementById("circleWidth").value;
    radius = document.getElementById("circleRadius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        console.log(current_position_x);
        console.log(current_position_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.arc(current_position_x, current_position_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } 
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
