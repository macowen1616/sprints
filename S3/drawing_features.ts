// drawing_features.ts
export {}; // 👈 ensures this file is isolated as its own module

// 1️⃣ Variables with data types
let playerName: string = "Makay";
let brushSize: number = 5;
let isDrawing: boolean = false;
let colors: string[] = ["black", "red", "blue", "green"];

console.log(`Player: ${playerName}, Default Brush: ${brushSize}px`);

// 2️⃣ Functions with data types
function setBrushSize(size: number): void {
  brushSize = size;
  console.log(`Brush size changed to ${brushSize}px`);
}

function mixColors(color1: string, color2: string): string {
  return `${color1}-${color2}`; // simple fake mix
}

setBrushSize(10);
console.log("Mixed color:", mixColors("red", "blue"));

// 3️⃣ Class example
class DrawingPlayer {
  name: string;
  score: number;
  drawings: string[];

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.drawings = [];
  }

  addDrawing(drawingName: string): void {
    this.drawings.push(drawingName);
    console.log(`${this.name} added a drawing: ${drawingName}`);
  }

  increaseScore(points: number): void {
    this.score += points;
    console.log(`${this.name}'s score is now ${this.score}`);
  }
}

// Create instance
const player1 = new DrawingPlayer("Makay");
player1.addDrawing("Sunset Sketch");
player1.increaseScore(50);

// 4️⃣ Arrays
let brushSizes: number[] = [2, 4, 6, 8, 10];
brushSizes.push(12);
console.log("Available brush sizes:", brushSizes);

// 5️⃣ Tuples
let playerStats: [string, number, boolean];
playerStats = ["Makay", 50, true]; // name, score, isActive

console.log(`Tuple Data → Name: ${playerStats[0]}, Score: ${playerStats[1]}, Active: ${playerStats[2]}`);
