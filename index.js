const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficulltySelect = document.getElementById('difficullty');


const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

// showInit word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
text.focus(); 

// Start counting down time
const timeInterval = setInterval(updateTime, 1000);

// Random word from array words
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}



// Add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();

//  Update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
    if(time === 0){
        clearInterval(timeInterval);
        //end game
        gameOver();
    }
} 

// Game over, show last score
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display = 'flex';
}

//  Typing
text.addEventListener('input', e =>{
    const insertedText = e.target.value;
    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();

        // clear
        e.target.value = '';
        if(difficullty === 'hard'){
            time += 2;
        }else if(difficullty === 'medium'){
            time += 3;
        }else{
            time += 5;
        }
        updateTime();
    }
})

// Settings btn click 
settingsBtn.addEventListener('click',()=>{
    settings.classList.toggle('hide');
});

