// app.ts
import { Tetris } from "./Tetris.js"

export class App {
    tetris: Tetris;
    audio: HTMLAudioElement;
    constructor() {
        this.tetris = new Tetris();
        this.audio = new Audio("./sound/playing.mp3");
        this.audio.loop = true;
    }

    update() {
        this.tetris.run();
        this.setupEventListeners();
        this.tetris.update();
        const loseInterval = setInterval(() => { 
            if (this.tetris.lose) {
                this.audio.pause();
                this.showScore();
                clearInterval(loseInterval)
            }
            else{
                console.log("waiting")
            }
        },1000);
        
    }

    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                this.tetris.currentTetromino.move(this.tetris,"down");
            } else if (event.key === 'ArrowLeft') {
                this.tetris.currentTetromino.move(this.tetris,"left");
            } else if (event.key === 'ArrowRight') {
                this.tetris.currentTetromino.move(this.tetris,"right");
            }else if (event.key === 'ArrowUp') {
                this.tetris.currentTetromino.rotate(this.tetris);
            }
        });
    }

    showScore() {
        const resultDiv = document.getElementById('result') as HTMLDivElement;
        const finalScore = document.getElementById('final-score') as HTMLDivElement;
        const score = document.getElementById('score') as HTMLDivElement;
        finalScore.textContent = `Your Score: ${score.textContent}`;
        resultDiv.style.zIndex = "1";
        resultDiv.style.display = "flex";

        const closeButton = document.getElementById('result-close') as HTMLButtonElement;
        closeButton.addEventListener('click', () => {
            resultDiv.style.display = "none";
            location.reload();
        });

    }

    instruction() {
        document.addEventListener('DOMContentLoaded',()=>{
            const audio = new Audio("./sound/playing.mp3");
            const instructionDiv = document.getElementById('instruction') as HTMLDivElement;
            instructionDiv.style.display = "flex";
            const closeButton = document.getElementById('instruction-close') as HTMLButtonElement;
            closeButton.addEventListener('click', () => {
                instructionDiv.style.display = "none";
                audio.play();
                this.update();
            });
        })
    }

    run() {
        this.instruction();
    }
}

const app = new App();
app.run();
