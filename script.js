//create a 2d array to manage the layout of the pieces on the board
arrPieces = [
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w']
];

//create a pointer to the secret span
var secretSpan = document.getElementById("selectedSquare");

//function to build a Checkers
function buildCheckersBoard(){
    //shortcut to html div
    let CheckersBoard = document.getElementById("divCheckersboard");

    //outer loop to create
    for (let i=0; i < 8; i++){
        //inner loop to create 8 columns
        for (let j=0; j < 8; j++){
            let CheckersSquare = document.createElement('div');

            //add the css class to the div
            CheckersSquare.className = 'CheckersSquare';
            // add an id, so we know where to move the pieces to and from
            CheckersSquare.setAttribute("id", "div" + i + j);

            //use modules to alternate the colors of squares
            //divide the number by 2 and if the remander is 0 then the number is even
            if ((i+j) % 2 == 0){
                //this will change the background color of odd square numbers
                CheckersSquare.style.backgroundColor = "#2e1f14";
                //add an event listner for the click on the square event, then call the move piece function
                CheckersSquare.addEventListener("click", movePiece);
            }

            //add the square to the board
            CheckersBoard.appendChild(CheckersSquare);

            //if the corresponding element in the array is not null, adda  checkers piece to the square
            //in this example if the value is w or b then this if statement will be true
            if (arrPieces[i][j]){
                //pass in 3 arguments piece, the css class to set the correct piece color, the div where the piece should be added 
                createPiece("piece" + i + j, "checkerPiece-" + arrPieces[i][j], CheckersSquare);
            }
        }
    }
}

//function to create the checkers piece
function createPiece(id, pieceClass, theSquare){
    //create a new div
    var newPiece = document.createElement("div");
    //set the id so we can know what square/piece we are working with later
    newPiece.setAttribute("id", id);
    //apply the standard checker piece class to the piece
    newPiece.classList.add("checkerPiece");
    //use the value passed in to ceate white or black piece
    newPiece.classList.add(pieceClass);
    //add an onclick event handler to hanlde when the piece is click piece is clicked
    newPiece.addEventListener("click", savePieceId);
    //add our new piece to the square
    theSquare.appendChild(newPiece);
}

//function to handle moving of piece
function movePiece(event){
    console.log("movePiece function called");
    
    //what square was clicked
    var newSquareId = event.target.id;

    newSquareId = newSquareId.replace("piece", "").replace("div", "");

    //get the id of the piece to move from the sectet span
    var selPieceId = secretSpan.textContent;

    //make sure that the user is trying to move the piece to a differnt square
    if (newSquareId != selPieceId){
        //create a pointer to old square
        var oldSquare = document.getElementById("div" + selPieceId);
        //create a pointer to the old piece
        var oldPiece = document.getElementById("piece" + selPieceId);
        //get the color of the old piece so new piece is the same color
        var oldPieceColorClass = oldPiece.classList[1];
        //remove the old piece from the board
        oldSquare.removeChild(oldPiece);

        var newSquare = document.getElementById("div" + newSquareId);
        //create new piece on new square
        createPiece("piece" + newSquare, oldPieceColorClass, newSquare);

        secretSpan.textContent = "";
    }
}

//function to save the piece id in our spand
function savePieceId(event){
    //console.log("savePieceID function was called")

    //var to hold the id of the piece
    var selectedPieceId = event.target.id;
    //remove the word piece from the id
    selectedPieceId = selectedPieceId.replace("piece", "");
    //store the piece id in our secret span
    secretSpan.textContent = selectedPieceId;

    console.log("selectedPieceId=" + selectedPieceId)
}

//call the function to build chess board
buildCheckersBoard();
