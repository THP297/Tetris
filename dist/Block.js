import { Settings } from "./setting.js";
export class Block {
    constructor(item) {
        this.item = item;
    }
    create(row, col, color) {
        const gridContainer = document.getElementById("grid-container");
        this.item.classList.add('block');
        this.item.style.gridColumnStart = `${col}`;
        this.item.style.gridRowStart = `${row}`;
        this.item.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
        gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.appendChild(this.item);
    }
    setRow(row) {
        this.item.style.gridRowStart = `${row}`;
    }
    setCol(col) {
        this.item.style.gridColumnStart = `${col}`;
    }
    getRow() {
        return parseInt(this.item.style.gridRowStart);
    }
    getCol() {
        return parseInt(this.item.style.gridColumnStart);
    }
    removeItem() {
        this.item.remove();
    }
    rotate(pivot_pos) {
        let xPosition = this.getCol();
        let yPosition = this.getRow();
        let translated_x = xPosition - pivot_pos[0];
        let translated_y = yPosition - pivot_pos[1];
        if (translated_y != 0) {
            var rotated_x = -translated_y;
            var rotated_y = translated_x;
        }
        else {
            var rotated_x = translated_y;
            var rotated_y = translated_x;
        }
        return [rotated_x + pivot_pos[0], rotated_y + pivot_pos[1]];
    }
    move(direction) {
        if (direction === "down") {
            const currentRow = this.getRow();
            this.setRow(currentRow + 1);
        }
        else if (direction === "left") {
            const currentCol = this.getCol();
            this.setCol(currentCol - 1);
        }
        else if (direction === "right") {
            const currentCol = this.getCol();
            this.setCol(currentCol + 1);
        }
    }
    isCollide(tetris, newPosition) {
        const nextX = newPosition[0] - 1;
        const nextY = newPosition[1] - 1;
        if (nextY > Settings.GRID_HEIGHT - 1) {
            return true;
        }
        else if (nextX < 0 || nextX >= Settings.GRID_WIDTH) {
            return true;
        }
        else if (tetris.twoDBlockArray[nextY][nextX] !== null) {
            return true;
        }
        else {
            return false;
        }
    }
}
