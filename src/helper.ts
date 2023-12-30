import { Settings } from "./setting.js";

export function createTwoDBlockArray() {
    const twoDBlockArray = [];
    
    for (let y = 0 ; y < Settings.GRID_HEIGHT; y++){
      const row = [];  // Create a new row array for each row
      for (let x = 0; x < Settings.GRID_WIDTH; x++) {   
        row.push(null);
      }
      twoDBlockArray.push(row);
    }
    return twoDBlockArray;
  }

export function nextTetrominoPosition(currentX: number, currentY: number, direction: string): [number, number] {
    switch (direction) {
        case "down":
            return [currentX, currentY + 1];
        case "left":
            return [currentX - 1, currentY];
        case "right":
            return [currentX + 1, currentY];
        default:
            return [currentX, currentY];
    }
}