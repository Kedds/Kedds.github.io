// @ts-check

/*
Code to be used with index.html
*/


/*****************************************************
    EVENT LISTENERS FOR USER GENERATED EVENTS
******************************************************/

/** 
 * On button click, solve Sudoku puzzle in image
 */
function registerSudokuButtonHandler() {
    let button = document.getElementById("sudokuButton");
    button.addEventListener("click", function changeImage(event) {
        let currentImage = document.querySelector('#sudokuImage').getAttribute('src');
        let imageName1 = "pictures/sudoku_original_crop.jpg";
        let imageName2 = "pictures/sudoku_looping_crop.gif";
        if (currentImage == imageName1) {
            document.querySelector('#sudokuImage').setAttribute('src', imageName2);
        }
        else {
            document.querySelector('#sudokuImage').setAttribute('src', imageName1);
        }
    });
}



/*****************************************************
    EVENTS TRIGGERED WHEN THE DOM IS FINISHED LOADING
******************************************************/
//TODO: why are we getting "button is null" for the following?
window.addEventListener('DOMContentLoaded', registerSudokuButtonHandler);

