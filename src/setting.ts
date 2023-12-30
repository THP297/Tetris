export class Settings {
    static GRID_WIDTH = 11;
    static GRID_HEIGHT = 20;
    static SPEED = 500;
    static tetrominoShapes = [
      [[1, 1, 1, 1]],   // I
      [[1, 1, 1], [1]], // J
      [[1, 1, 1], [0, 0, 1]], // L
      [[1, 1], [1, 1]], // O
      [[0, 1, 1], [1, 1]], // S
      [[1, 1, 1], [0, 1]], // T
      // [[1, 1, 0], [0, 1, 1]] 
    ];
  }