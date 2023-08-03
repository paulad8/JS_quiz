// Variables

const difficultyEasyBtn = document.getElementById("difficulty-easy");
const difficultyHardBtn = document.getElementById("difficulty-hard");

const startGameArea = document.getElementById("start-game-area");
const difficultyGameArea = document.getElementById("difficulty-game-area");


    let gameState = "start-game-area";

// Event Listeners
difficultyEasyBtn.addEventListener("click", runQuiz);

document.getElementById("play").addEventListener("click", toDifficultyGameArea);

//

/** When the play clicks 'Let's Go!', hides the start-game-area and shows the difficulty-game-area **/

function toDifficultyGameArea() {
    startGameArea.classList.add("hide");
    difficultyGameArea.classList.remove("hide");
    gameState = "difficulty-game-area";

}

/** Depending on what difficulty the player selects, this function ... 
*/



