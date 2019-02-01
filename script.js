//set dafault values
document.querySelector('.dice').style.display = 'none';

document.querySelector('#current-0').textContent = '0';

document.querySelector('#current-1').textContent = '1';

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';




//set the default score and current score to 0

//create random numbers generator
//start the game:

// discplay the dice roll resultin a variable. Find a dice id in html and turn it into variable.

//If not 1
//generate random numner
 // add random number to the current score to the player score
//else - swithch active player

var roundscore = 0;
var acrivePlayer = 0;
var currentScore = 0;
//random number 1-6
var dice = Math.floor(Math.random(6) * 6) + 1;

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'block';

//now we can manipulate a dice

//change to picrure of dice to show different numbers
diceDom.src = 'dice-' + dice + '.png';

if(dice ! == 1){
    //get the renadom number
    //show the random number
    //add to the score and current score
    roundScore += dice;
    document.getElementById('#current-' + activePlayer).textContent = roundscore;
}