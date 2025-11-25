function getComputerChoice(){
    let n = Math.floor(Math.random() * (Math.floor(3) + 1));
    switch (n % 3){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
        default:
            return 'Error'
    }
}

function getHumanChoice(){
    let choice = prompt("Choose between rock, paper, scissor");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (computerChoice === humanChoice)
        return;
    if (computerChoice == 'rock' && humanChoice == 'paper')
        humanScore++;
    else if (computerChoice == 'paper' && humanChoice == 'scissor')
        humanScore++;
    else if (computerChoice == 'scissor' && humanChoice == 'rock')
        humanScore++;
    else
        computerScore++;
}

let getWinner = () => {
    if (humanScore > computerScore)
        return 'human';
    return 'computer';
};

let humanScore = 0;
let computerScore = 0;

function playGame(){
    let computerChoice;
    let humanChoice;
    
    for (let i = 0; i < 5; i++)
    {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Humanscore = " + humanScore);
    console.log("Computerscore = " + computerScore);
    console.log('The ' + getWinner() + ' won the round !!!');
}

playGame();