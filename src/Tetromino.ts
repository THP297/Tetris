import { Block } from "./Block.js"
import { Tetris } from "./Tetris.js";
import { nextTetrominoPosition } from "./helper.js";
export class Tetromino{
    blocks: Block[] = [];
    landing: boolean = false;

    constructor(blocks: Block[]){
        this.blocks = blocks;
    }

    create(shape: number[][], color: number[])
    {
        let blocks = []
        for (let row = 0; row < shape.length; row++)
        {
            for (let col = 0; col < shape[row].length; col++)
            {
                if (shape[row][col] === 1)
                {
                    const item = document.createElement("div")
                    
                    const block = new Block(item);
                    block.create(row+1,4+col,color)
                    blocks.push(block);
                }
            }
        }
        this.blocks = blocks;
    }


    move(tetris:Tetris,direction:string) {
        let currentPositions = this.blocks.map(block => [block.getCol(),block.getRow()])
        let newPositions = currentPositions.map(position => nextTetrominoPosition(position[0],position[1],direction))
        if (!this.isCollide(tetris,newPositions))
        {
            this.blocks.forEach(block => {
                block.move(direction)
            });
        }
        else if (direction === "down")
        {
            this.landing = true;
        }
    }

    rotate(tetris: Tetris){
        let pivot_pos = [this.blocks[0].getCol(),this.blocks[0].getRow()]
        let newBlockPositions = this.blocks.map(block => block.rotate(pivot_pos))
        if (! this.isCollide(tetris,newBlockPositions))
        {
            newBlockPositions.forEach((position,index) =>{
                this.blocks[index].setCol(position[0])
                this.blocks[index].setRow(position[1])
            })
        }
    }

    isCollide(tetris: Tetris,newPositions:number[][]): boolean
    {
        return this.blocks.some((block,index) =>{
            return block.isCollide(tetris,newPositions[index])
        })
    }
}