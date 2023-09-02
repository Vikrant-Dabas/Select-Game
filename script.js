let timer = 60;
let score = 0;
let hit;
function incScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}
function addBubbles() {
    let addBubble = "";

    for (let i = 0; i < 216; i++) {
        let rndm = Math.floor(Math.random() * 10);
        addBubble += `<div class="bubble">${rndm}</div>`
    }

    document.querySelector('#pnbot').innerHTML = addBubble;
}
function startTimer() {
    let time_int = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(time_int);
            document.querySelector('#pnbot').innerHTML = '<div id="over"><h1>Game Over!</h1><h3>Score : <span class="final"></span></h3></div>';
            document.querySelector('.final').innerHTML = score;
        }
    }, 1000);
}
function setHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = hit;
}

startTimer();
addBubbles();
setHit();
document.querySelector('#pnbot').addEventListener('click', (button) => {
    let selected = Number(button.target.textContent);
    if (selected === hit) {
        setHit();
        incScore();
        addBubbles();
    }
})
