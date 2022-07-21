const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice, computerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();

    computerChoice = computerChoiceDisplay.innerHTML;

    if(computerChoice == userChoice)
        result = 'Nobody wins';
    if(computerChoice=='rock' && userChoice=='paper')
        result = 'You win';
    if(computerChoice=='paper' && userChoice=='scissors')
        result = 'You win';
    if(computerChoice=='scissors' && userChoice=='rock')
        result = 'You win';

    if(computerChoice=='paper' && userChoice=='rock')
        result = 'Computer wins';
    if(computerChoice=='scissors' && userChoice=='paper')
        result = 'Computer wins';
    if(computerChoice=='rock' && userChoice=='scissors')
        result = 'Computer wins';

        resultDisplay.innerHTML = result;
}))

function generateComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    
    if(random === 1)
    computerChoice = 'rock';
    if(random === 2)
    computerChoice = 'paper';
    if(random === 3)
    computerChoice = 'scissors';

    computerChoiceDisplay.innerHTML = computerChoice;
}


