import { Tetromino } from "./Tetromino.js";
import { Settings } from "./setting.js";
import { createTwoDBlockArray } from "./helper.js";
export class Tetris {
    constructor() {
        this.lose = false;
        this.currentTetromino = new Tetromino([]);
        this.twoDBlockArray = createTwoDBlockArray();
    }
    checkLose() {
        this.twoDBlockArray[0].forEach(block => {
            if (block !== null) {
                console.log("lose");
                this.lose = true;
            }
        });
    }
    createGrid() {
        const gridContainer = document.getElementById('grid-container');
        for (let row = 0; row < Settings.GRID_HEIGHT; row++) {
            for (let col = 0; col < Settings.GRID_WIDTH; col++) {
                const square = document.createElement("div");
                square.className = "grid-cell";
                square.style.backgroundColor = `rgba(169, 166, 166, 0.8)`;
                gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.appendChild(square);
            }
        }
    }
    spawnTetromino() {
        const randomIndex = Math.floor(Math.random() * Settings.tetrominoShapes.length);
        const shape = Settings.tetrominoShapes[randomIndex];
        const color = new Array(3).fill(0).map(() => Math.floor(Math.random() * 255));
        this.currentTetromino = new Tetromino([]);
        this.currentTetromino.create(shape, color);
    }
    updateTwoDBlockArray() {
        this.currentTetromino.blocks.forEach(block => {
            const row = block.getRow() - 1;
            const col = block.getCol() - 1;
            this.twoDBlockArray[row][col] = block;
        });
    }
    checkTetrominoLanding() {
        if (this.currentTetromino.landing) {
            this.updateTwoDBlockArray();
            this.spawnTetromino();
        }
    }
    checkFullRow() {
        for (let row = Settings.GRID_HEIGHT - 1; row > 0; row--) {
            let isFull = true;
            for (let col = Settings.GRID_WIDTH - 1; col >= 0; col--) {
                if (this.twoDBlockArray[row][col] === null) {
                    isFull = false;
                    break;
                }
            }
            if (isFull) {
                const score = document.getElementById("score");
                score.textContent = `${parseInt(score.textContent) + 100}`;
                const audio = new Audio("./sound/clear.mp3");
                audio.play();
                // remove row 
                this.twoDBlockArray[row].forEach((block, index) => {
                    var _a;
                    if (block !== null) {
                        (_a = this.twoDBlockArray[row][index]) === null || _a === void 0 ? void 0 : _a.removeItem();
                    }
                });
                for (let y = row; y > 0; y--) {
                    this.twoDBlockArray[y - 1].forEach((block, index) => {
                        var _a;
                        if (block !== null) {
                            // move items down and update the value of twoDBlockArray
                            (_a = this.twoDBlockArray[y - 1][index]) === null || _a === void 0 ? void 0 : _a.setRow(y + 1);
                            this.twoDBlockArray[y][index] = this.twoDBlockArray[y - 1][index];
                        }
                        else {
                            this.twoDBlockArray[y][index] = null;
                        }
                    });
                }
                // set data for row index 0
                this.twoDBlockArray[0] = new Array(this.twoDBlockArray[0].length).fill(null);
                break;
            }
        }
    }
    update() {
        const playingInterval = setInterval(() => {
            if (!this.lose) {
                this.checkTetrominoLanding();
                this.checkFullRow();
                this.checkLose();
                this.currentTetromino.move(this, "down");
            }
            else {
                clearInterval(playingInterval);
            }
        }, Settings.SPEED);
    }
    run() {
        this.createGrid();
        this.spawnTetromino();
    }
}
