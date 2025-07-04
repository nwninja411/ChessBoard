//function to build a chessboard
function buildChessBoard(){
    //shortcut to html div
    let chessBoard = document.getElementById("divChessboard");

    //outer loop to create
    for (let i=0; i < 8; i++){
        //inner loop to create 8 columns
        for (let j=0; j < 8; j++){
            let chessSquare = document.createElement('div');

            //add the css class to the div
            chessSquare.className = 'chessSquare';

            //use modules to alternate the colors of squares
            //divide the number by 2 and if the remander is 0 then the number is even
            if ((i+j) % 2 == 0){
                chessSquare.style.backgroundColor = "#2e1f14";
            }

            //add the square to the board
            chessBoard.appendChild(chessSquare);
        }
    }
}

//call the function to build chess board
buildChessBoard();
