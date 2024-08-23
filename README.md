# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game with an option to play against the computer or a friend. Built using HTML, CSS, and JavaScript.

## Features

- Play with a friend or against the computer.
- Responsive design for different screen sizes.
- Displays whose turn it is and handles game state transitions smoothly.

## Demo

You can view a live demo of the game [here](https://shafi3m.github.io/Tic-Tac-Toe/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/shafi3m/tic-tac-toe.git
    ```

2. Navigate into the project directory:
    ```bash
    cd tic-tac-toe
    ```

3. Open `index.html` in your web browser to play the game.

## Usage

- Click on a box to make a move.
- Use the "Play with Computer" button to play against the AI.
- Use the "Play with Friend" button to switch to two-player mode.
- Use the "Reset Game" button to restart the game.
- The "New Game" button appears after the game ends, allowing you to start a new game.

## JavaScript Functions

Here's a brief overview of the key functions used in the `app.js` file:

- **`resetGame()`**: Resets the game state, including turn order, box availability, and game messages. Sets the turn based on the previous game's winner.

- **`playerMove(box)`**: Handles a move made by the player. Updates the box with the player's symbol, disables the box, and updates the turn information.

- **`computerMove()`**: Executes a move for the computer in "Play with Computer" mode. Chooses a random empty box and updates the game state accordingly.

- **`gameDraw()`**: Displays a message indicating that the game was a draw and disables all boxes.

- **`disableBox()`**: Disables all boxes to prevent further moves once the game has ended.

- **`enableBox()`**: Enables all boxes and clears their content for a new game.

- **`showwinner(winner)`**: Displays a message announcing the winner and disables all boxes.

- **`checkWinner()`**: Checks if there's a winning combination based on predefined win patterns. Returns `true` if a player has won.

- **`updateTurnInfo()`**: Updates the displayed turn information to show which player's turn it is.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspiration for the game from classic Tic-Tac-Toe.
- Libraries and tools used: [List any libraries or tools you used, if applicable].

## Contact

For any feedback, please contact shafi.gecr@gmail.com
