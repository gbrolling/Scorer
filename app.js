const h1HomeScore = document.querySelector('#home-score');
const h1AwayScore = document.querySelector('#away-score');
const optPlayTo = document.querySelector("#play-to");
const btnHomeScore = document.querySelector('#add-home-score');
const btnAwayScore = document.querySelector('#add-away-score');
const btnReset = document.querySelector('#reset-score');
let cont1 = 0;
let cont2 = 0;
let maxScore = 0;
let winnerHome = 0;
let winnerAway = 0;

function disableButton(btnHomeScore,btnAwayScore){
    btnHomeScore.disabled = true;
    btnAwayScore.disabled = true;
}

function enableButton(btnHomeScore,btnAwayScore){
    btnHomeScore.disabled = false;
    btnAwayScore.disabled = false;
}

optPlayTo.addEventListener('change',() =>{
    maxScore = parseInt(optPlayTo.value);
})

btnHomeScore.addEventListener('click', () => {
    if(cont1 !== maxScore && cont2 !==maxScore){
        cont1 += 1;
        h1HomeScore.textContent = cont1;  
    }
    if(maxScore === cont1 || maxScore === cont2){
        disableButton(btnHomeScore,btnAwayScore);
        winnerHome = 1;
    }
    if(winnerHome == 1){
        h1HomeScore.style.color = "green";
        h1AwayScore.style.color = "red";
        }
})

btnAwayScore.addEventListener('click', () => {
    if(cont2 !== maxScore && cont1 !==maxScore){
        cont2 += 1;
        h1AwayScore.textContent = cont2;  
    }
    if(maxScore === cont1 || maxScore === cont2){
        disableButton(btnHomeScore,btnAwayScore);
        winnerAway = 1;
        if(winnerAway == 1){
        h1AwayScore.style.color ="green"
        h1HomeScore.style.color = "red";
        }
    }  
})


btnReset.addEventListener('click', () => {
    cont1 = 0;
    cont2 = 0;
    winnerHome = 0;
    winnerAway = 0;
    h1HomeScore.textContent = cont1;
    h1AwayScore.textContent = cont2;
    h1HomeScore.style.color = "black";
    h1AwayScore.style.color = "black";
    enableButton(btnHomeScore,btnAwayScore);
})