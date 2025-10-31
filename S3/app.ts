// app.ts
const canvas = document.getElementById("drawingCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const clearBtn = document.getElementById("clearBtn") as HTMLButtonElement;
const colorPicker = document.getElementById("colorPicker") as HTMLInputElement;
const brushSizeSlider = document.getElementById("brushSize") as HTMLInputElement;
const sizeDisplay = document.getElementById("sizeDisplay") as HTMLSpanElement;

let drawing = false;
let brushColor = "#000000";
let brushSize = 4;


colorPicker.addEventListener("input", () => {
  brushColor = colorPicker.value;
});


brushSizeSlider.addEventListener("input", () => {
  brushSize = parseInt(brushSizeSlider.value);
  sizeDisplay.textContent = brushSize.toString();
});

function getMousePos(event: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

// Start drawing
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  const pos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
});

// Draw
canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  const pos = getMousePos(e);

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = brushColor;

  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.closePath();
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
  ctx.closePath();
});

// Clear canvas
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
