window.addEventListener('load',init);

//Globals
let time = 5;
let score = 0;
let isPlaying;

const levels = {
    easy: 5,
    medium : 3,
    hard : 2
};

const currentLevel = levels.medium;


//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];


//Initialize Game


function init() {
    //show level in seconds
    seconds.innerHTML = currentLevel;
    //Load random word from array
    showWord(words);
    //Match on word input
    wordInput.addEventListener('input',startMatch);
    //Call countdown every second
    setInterval(countdown,1000);
    //Check game status
    setInterval(checkStatus,50);
}


//Start match
function startMatch() {
    if(matchWords()){
      isPlaying = true;
      time = currentLevel +1;
      showWord(words);
      wordInput.value = '';
      score++;
    }

    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }

}


//Match current word to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}


//Pick and show random word
function showWord(words) {
    let number = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[number];
}

//Countdown timer
function countdown() {
    //Make sure time is nt run out
    if(time > 0){
        //Decrease the time
        time--;
    }else if(time === 0){
        //Game over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if(!isPlaying && time ===0){
        message.innerHTML = 'Game Over';
        score = -1;
    }
}
