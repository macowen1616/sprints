// app.ts
var canvas = document.getElementById("drawingCanvas");
var ctx = canvas.getContext("2d");
var clearBtn = document.getElementById("clearBtn");
var colorPicker = document.getElementById("colorPicker");
var brushSizeSlider = document.getElementById("brushSize");
var sizeDisplay = document.getElementById("sizeDisplay");
var drawing = false;
var brushColor = "#000000";
var brushSize = 4;
// 🎨 Update color when user picks a new one
colorPicker.addEventListener("input", function () {
    brushColor = colorPicker.value;
});
// 🖌️ Update brush size when slider changes
brushSizeSlider.addEventListener("input", function () {
    brushSize = parseInt(brushSizeSlider.value);
    sizeDisplay.textContent = brushSize.toString();
});
function getMousePos(event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
}
// Start drawing
canvas.addEventListener("mousedown", function (e) {
    drawing = true;
    var pos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
});
// Draw
canvas.addEventListener("mousemove", function (e) {
    if (!drawing)
        return;
    var pos = getMousePos(e);
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
});
// Stop drawing
canvas.addEventListener("mouseup", function () {
    drawing = false;
    ctx.closePath();
});
canvas.addEventListener("mouseleave", function () {
    drawing = false;
    ctx.closePath();
});
// Clear canvas
clearBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
