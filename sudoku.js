var numSelected = null; // Variable to store the currently selected number
var tileSelected = null; // Variable to store the currently selected tile

var errors = 0; // Variable to keep track of the number of errors

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]; // 9x9 board representation

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]; // Solution for the board

window.onload = function(){
    setGame(); // Call the setGame function when the window finishes loading
}

function setGame(){
    // Create number selection buttons
    for (let i = 1; i <= 9; i++){
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber); // Add click event listener
        number.classList.add("number"); // Add CSS class
        document.getElementById("digits").appendChild(number); // Add the number element to the "digits" container
    }

    // Create the game board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start"); // Add CSS class for the initial tiles
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line"); // Add CSS class for horizontal lines
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line"); // Add CSS class for vertical lines
            }
            tile.addEventListener("click", selectTile); // Add click event listener
            tile.classList.add("tile"); // Add CSS class for tiles
            document.getElementById("board").append(tile); // Add the tile element to the "board" container
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected"); // Remove the CSS class from the previously selected number
    }
    numSelected = this;
    numSelected.classList.add("number-selected"); // Add CSS class to indicate the selected number
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return; // Return if the tile already contains a number
        }

        let coords = this.id.split("-"); // Get the row and column coordinates of the tile
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id; // Set the selected number in the tile
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors; // Increment error count and update the error display
        }
    }
}
