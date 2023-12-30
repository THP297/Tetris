# Tetris
#### Video Demo: https://youtu.be/LiVpEEcEnwU
#### Description:
This project is a Tetris game implemented in TypeScript. The game logic is encapsulated in several TypeScript classes, each residing in its own file in the `src/` directory.

- `app.ts`: This file contains the `App` class, which is the main entry point of the game. It initializes the game, sets up event listeners for user input, and manages the game loop.
- `Tetris.ts`: This file contains the `Tetris` class, which encapsulates the core game logic. It manages the game grid, the current Tetromino, and checks for game over conditions.
- `Tetromino.ts`: This file is likely to contain the `Tetromino` class, which represents a Tetromino piece in the game.
- `Block.ts`: This file is likely to contain the `Block` class, which represents a single block of a Tetromino.
- `helper.ts`: This file contains helper functions used across the project.
- `setting.ts`: This file contains game settings, such as grid dimensions and Tetromino shapes.

The game also includes sound effects, which are stored in the `sound/` directory, and images, which are stored in the `image/` directory. The game's appearance is defined in the `style.css` file in the `css/` directory.

The game is built using TypeScript, and the `tsconfig.json` file contains the configuration for the TypeScript compiler. The compiled JavaScript files are output to the `dist/` directory.

The game is launched by opening `index.html` in a web browser. This file includes the compiled JavaScript and CSS files, and defines the structure of the game's user interface.
