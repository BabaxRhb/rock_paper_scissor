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
            return 'Error';
    }
}

function playRound(humanChoice, computerChoice){
    let   winner = "Human";
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
    {
        computerScore++;
        winner = "Computer";
    }
    const roundResult = document.createElement("p");
    roundResult.textContent = 'Human = ' + humanChoice + ' ; computer = ' + computerChoice + ' => ' +  winner + ' won the round !';
    divSelect.appendChild(roundResult);
    if (humanScore == 5 || computerScore == 5)
    {
        const score = document.createElement("p");
        score.textContent = 'Human = ' + humanScore + ' ; computer = ' + computerScore + ' => ' + getWinner() + ' won the game !!!';
        divSelect.appendChild(score);
        humanScore = 0;
        computerScore = 0;
    }
}

let getWinner = () => { return humanScore > computerScore ? 'human' : 'computer'; };

let humanScore = 0;
let computerScore = 0;

const divSelect = document.querySelector("div");
const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorButton = document.createElement("button");
scissorButton.textContent = "scissor";

divSelect.appendChild(rockButton);
divSelect.appendChild(paperButton);
divSelect.appendChild(scissorButton);

rockButton.addEventListener('click', (e) => {
    e.preventDefault();
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener('click', (e) => {
    e.preventDefault();
    playRound("paper", getComputerChoice());
});

scissorButton.addEventListener('click', (e) => {
    e.preventDefault();
    playRound("scissor", getComputerChoice());
});
