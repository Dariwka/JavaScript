let buttons = document.querySelectorAll(".dot");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let close = document.getElementById("close");
let score = 0;
let active = 0;
let rightClick = 0
let mySound_Start = new sound("Laugh.mp3");
let mySound_GameOver = new sound("GAME_OVER.mp3");
let nameForm = document.getElementById("nameForm");
let playerName = ''
let players = []



window.onload = function () {
    players = JSON.parse(localStorage.getItem("players")) || []
    players.sort((a, b) => b.score - a.score)
    let playerLists = players.slice(0, 9).map(player => `<li>${player.playerName}, score: ${player.score}`).join('')
    document.querySelector('#top_players ul').innerHTML = playerLists
}

function updateResult() {
    if (playerName) players.push({ playerName, score })
    localStorage.setItem('players', JSON.stringify(players))
}


buttons[0].onclick = function () {
    clicked(0);
};
buttons[1].onclick = function () {
    clicked(1);
};
buttons[2].onclick = function () {
    clicked(2);
};
buttons[3].onclick = function () {
    clicked(3);
};


const clicked = (i) => {
    console.log("clicked:", i);
    score++;
    scoredisplay.textContent = `Your score is ${score}`
    if (i = active) {
        rightClick++;
        getRandomInt();
        console.log(`rightclicked: ${rightClick}`)
    } else {
        end_Game();
    }

    if (rightClick.value = 0) {
        end_Game()
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const start_Game = () => {
    console.log("Game Started");
    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('stop').style.visibility = 'visible';
    document.querySelector(".gamearea").style.pointerEvents = "visible";

    mySound_Start.play();

    active = nextActive;

    console.log("Active:", active);

    timer = setTimeout(start_Game, 1000);

    function pickNew(active) {
        let nextActive = getRandomInt(0, 3);

        if (nextActive != active) {
            return nextActive;

        } else {
            return pickNew(active);
        }

    }

};

const end_Game = () => {
    clearTimeout(timer);
    console.log("Game over");
    overlay.style.visibility = "visible";
    gameover.textContent = `Your score is ${score}`;
    playerName = document.getElementById("playerName").value
    console.log("playerName")
    mySound_GameOver.play();
    mySound_Start.stop();
    updateResult();

};

const reloadGame = () => {
    console.log("what?");
    window.location.reload()
};

close.addEventListener("click", reloadGame);



function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
