"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1️⃣ Variables with data types
var playerName = "Makay";
var brushSize = 5;
var isDrawing = false;
var colors = ["black", "red", "blue", "green"];
console.log("Player: ".concat(playerName, ", Default Brush: ").concat(brushSize, "px"));
// 2️⃣ Functions with data types
function setBrushSize(size) {
    brushSize = size;
    console.log("Brush size changed to ".concat(brushSize, "px"));
}
function mixColors(color1, color2) {
    return "".concat(color1, "-").concat(color2); // simple fake mix
}
setBrushSize(10);
console.log("Mixed color:", mixColors("red", "blue"));
// 3️⃣ Class example
var DrawingPlayer = /** @class */ (function () {
    function DrawingPlayer(name) {
        this.name = name;
        this.score = 0;
        this.drawings = [];
    }
    DrawingPlayer.prototype.addDrawing = function (drawingName) {
        this.drawings.push(drawingName);
        console.log("".concat(this.name, " added a drawing: ").concat(drawingName));
    };
    DrawingPlayer.prototype.increaseScore = function (points) {
        this.score += points;
        console.log("".concat(this.name, "'s score is now ").concat(this.score));
    };
    return DrawingPlayer;
}());
// Create instance
var player1 = new DrawingPlayer("Makay");
player1.addDrawing("Sunset Sketch");
player1.increaseScore(50);
// 4️⃣ Arrays
var brushSizes = [2, 4, 6, 8, 10];
brushSizes.push(12);
console.log("Available brush sizes:", brushSizes);
// 5️⃣ Tuples
var playerStats;
playerStats = ["Makay", 50, true]; // name, score, isActive
console.log("Tuple Data \u2192 Name: ".concat(playerStats[0], ", Score: ").concat(playerStats[1], ", Active: ").concat(playerStats[2]));
