//set dafault values
//set the default score and current score to 0
var scores, roundScore, activePlayer, gameIsPlaying;
;
var previous

init();

//add event listener to the button . add function to event listener

document.querySelector('.btn-roll').addEventListener('click', function(){
  //create random numbers generator variable  
    if(gameIsPlaying){
    var dice = Math.floor(Math.random() * 6 + 1); 
        var diceDom = document.querySelector('.dice');
        //change a dice img source to one depending on random number
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        
      
        if(dice !== 1){
            //update the round score
           roundScore += dice;
            //display the round score
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
       } else if(dice === 6 && previous === 6){
           //if two sixes in a row - looses points
          
           scores[activePlayer0] = '0';
           document.querySelector('#current-' + activePlayer).textContent = '0';
           document.querySelector('#score-' + activePlayer).textContent = '0';
           
           nextPlayer();
          
        }else{
          // next player
           nextPlayer();
       } 
        //in an end of  a function we store variable in a global
        //variable so we have access to it
          previous = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameIsPlaying){
    //calculate total score
    scores[activePlayer] +=roundScore;
    //display total score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.finalscore').value;
       var winScore
       
       //Undefined, 0, null or "" are coersed to false
    
    if(input){
         winScore = input;        
    } else {
        winningScore = 100;
    }   
    
    if (scores[activePlayer] >= winScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        //document.querySelector('.dice').style.display = 'none';
        gameIsPlaying = false;
    } else{
        nextPlayer();
    }
    }
});


function nextPlayer() {
    activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';   
    document.querySelector('.player-1-panel').classList.toggle('active') ;  
    document.querySelector('.player-0-panel').classList.toggle('active') ; 
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

//if any score in a scores array r\is 100- winner
function init(){
    
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    gameIsPlaying = true;
    
    //document.querySelector('.dice').style.display = 'none';
    
    //document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '1';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

