# Tetris
#### Video Demo: https://youtu.be/LiVpEEcEnwU
#### Description:
This project is a comprehensive implementation of the classic game, Tetris, built using TypeScript. TypeScript, a statically typed superset of JavaScript, provides robust type-checking and object-oriented programming capabilities, making it an excellent choice for a project of this complexity.

The project's structure is well-organized, with each TypeScript class encapsulated in its own file within the src/ directory. This modular approach enhances readability and maintainability, making it easier to understand the functionality of each component.

The **App class**, located in app.ts, serves as the main entry point of the game. It is responsible for initializing the game, setting up event listeners for user input, and managing the game loop. This class essentially orchestrates the entire game, ensuring that all components work together seamlessly.

The Tetris class, found in Tetris.ts, encapsulates the core game logic. It manages the game grid and the current Tetromino, and checks for game over conditions. This class is the heart of the game, dictating the rules and mechanics of Tetris.

The Tetromino class, likely located in Tetromino.ts, represents a Tetromino piece in the game. Each Tetromino is a distinct geometric shape composed of four squares, and this class defines the properties and behaviors of these pieces.

The Block class, presumably in Block.ts, represents a single block of a Tetromino. This class is crucial as the Tetromino pieces are composed of these blocks, and their interaction with the game grid determines the progression of the game.

The helper.ts file contains helper functions used across the project. These functions likely perform common tasks or calculations that are needed in multiple places, promoting code reuse and reducing redundancy.

The setting.ts file contains game settings, such as grid dimensions and Tetromino shapes. This file acts as a configuration file, allowing easy adjustments to the game's parameters.

In addition to the TypeScript files, the project includes sound effects and images, stored in the sound/ and image/ directories respectively. These assets enhance the user experience, adding auditory and visual elements to the game.

The game's appearance is defined in the style.css file in the css/ directory. This CSS file styles the game's user interface, providing a visually pleasing and intuitive layout for players.

The TypeScript compiler's configuration is contained in the tsconfig.json file. This file dictates how the TypeScript files are compiled into JavaScript, which is output to the dist/ directory.

Finally, the game is launched by opening index.html in a web browser. This file includes the compiled JavaScript and CSS files, and defines the structure of the game's user interface. It serves as the bridge between the game's logic and the player, enabling interaction with the game.
