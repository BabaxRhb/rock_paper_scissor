function getComputerChoice(){
    let n = Math.floor(Math.random() * (Math.floor(3) + 1));
    console.log(n);
    switch (n % 3){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
        default:
            return 'Error'
    }
}

for (let i = 0; i < 5; i++)
    console.log(getComputerChoice());