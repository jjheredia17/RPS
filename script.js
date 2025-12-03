let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let name;
    if (choice === 0){
    
        name = 'rock';
    }
    else if(choice === 1){
      
        name = 'paper';
    }
    else{
    
        name = 'scissors';
    }

    console.log(name);
    return name;
}

function getHumanChoice(){
    let num = prompt("play your hand");
    num = num.toLowerCase();
    return num;

}
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice){
        console.log('draw')
    }

        else if(humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log('you win!, rock beats scissors')
            humanScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log('you win, scissors beats paper')
            humanScore++;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock'){
            console.log('you win, paper beats rock')
            humanScore++;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'rock'){
            console.log('you lose, rock beats scissors')
            computerScore++;
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper'){
            console.log('you lose, paper beats rock')
            computerScore++;
    }
      else{
        console.log('you lose, scissors beats paper')
        computerScore++;
    }
}

function playGame(){
let humanSelection;
let computerSelection;

for (let index = 0; index <5; index++) {
if(index < 5)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
}

}
