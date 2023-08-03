
# Sudoku Game

This is a Sudoku game implemented using HTML, CSS, and JavaScript. It allows users to play a game of Sudoku by selecting numbers and filling them in the 9x9 board. The game validates the entered numbers against the solution and keeps track of errors.

## Features

- Number Selection: Users can select a number from 1 to 9 by clicking on the respective number buttons.
- Board Interaction: Users can click on empty tiles in the board to fill them with the selected number.
- Error Tracking: The game keeps track of the number of errors made by the user.
- Initial Board Setup: The game initializes the board with some pre-filled numbers, forming the initial puzzle.
- Solution Validation: When the user fills a tile, the game checks if the number is correct by comparing it with the solution.
- Styling: The game applies CSS classes to highlight selected numbers, initial tiles, and grid lines.

## Usage

1. Clone the repository or download the source code files.
2. Open the `index.html` file in a web browser.
3. The Sudoku game will be displayed in the browser window.
4. Click on the numbers in the number selection area to choose a number.
5. Click on an empty tile on the board to fill it with the selected number.
6. If the number is correct, it will be displayed in the tile.
7. If the number is incorrect, the tile will remain empty, and an error will be counted.
8. The current error count is displayed on the screen.
9. Continue filling the board until the puzzle is complete.

## File Structure

- `sudoku.html`: The main HTML file that contains the game layout and structure.
- `sudoku.css`: The CSS file that defines the styling and appearance of the game elements.
- `sudoku.js`: The JavaScript file that implements the game logic and functionality.

## Development

The game was developed using plain HTML, CSS, and JavaScript without any external libraries or frameworks. The code is organized into separate functions and event handlers to handle number selection, tile selection, and error tracking.

The game initializes the board and sets up the number selection area when the page loads. Event listeners are added to the number buttons and board tiles to capture user interactions. The solution is compared to the user's input to validate the entered numbers. Error count and display are updated accordingly.
