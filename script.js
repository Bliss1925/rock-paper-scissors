const buttons = document.querySelectorAll("button");
let P1 = document.querySelector(".score1");
let C1 = document.querySelector(".score2");
let choice;
let cpuchoice;
debugger;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        choice = button.innerHTML;
        cpuchoice = computerPlay();
        let point = gameRound(choice, cpuchoice);
        if (point == "Player") {
            P1.append("|");
        }
        if (point == "CPU") {
            C1.append("|");
        }
    })
})










function getRandomInt() {
    return Math.floor(Math.random() * 3 + 1) //gets random int
}

function computerPlay() {      //generates a computer option
    let x = getRandomInt()
    switch (x) {
        case 1:
            x = "rock";
            break;
        case 2:
            x = "scissors";
            break;
        case 3:
            x = "paper";
            break;
    }
    return x;    
}


/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    for (i; i < 5; i++) {
        let x = gameRound();
        if (x == "CPU"){
            computerScore++;
        }
        else if (x == "Player") {
            playerScore++;
        }
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You win!");
        return 0;
    }
    else if (computerScore > playerScore) {
        alert("Better luck next time :(");
        return 0;
    }
    else {
        alert("Who likes a tie? Try again!");
        return 0;
    }*/

function gameRound(choice, cpuchoice) {
    let roundWin;
    
    switch (choice) {
        case "Rock":
            if (cpuchoice == "paper") {
                console.log("You lose! Paper beats Rock!");
                roundWin = "CPU";
                return roundWin;
            }
            else if (cpuchoice == "scissors") {
                console.log("You win! Rock beats Scissors!");
                roundWin = "Player";
                return roundWin;
            }
            else {
                console.log("Oh boy, a tie!");
                roundWin = "Not a winner";
                return roundWin;
            }
            break;
        case "Paper":
            if (cpuchoice == "scissors") {
                console.log("You lose! Paper beats Rock!");
                roundWin = "CPU";
                return roundWin;
            }
            else if (cpuchoice == "rock") {
                console.log("You win! Rock beats Scissors!");
                roundWin = "Player";
                return roundWin;
            }
            else {
                console.log("Oh boy, a tie!");
                roundWin = "Not a winner";
                return roundWin;
            }
            break;
        case "Scissors":
            if (cpuchoice == "rock") {
                console.log("You lose! Paper beats Rock!");
                roundWin = "CPU";
                return roundWin;
            }
            else if (cpuchoice == "paper") {
                console.log("You win! Rock beats Scissors!");
                roundWin = "Player";
                return roundWin;
            }
            else {
                console.log("Oh boy, a tie!");
                roundWin = "Not a winner";
                return roundWin;
            }
            
            }
        }
    


