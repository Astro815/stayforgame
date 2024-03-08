const $ = (e) => { return document.querySelector(e); };

let gameData;

function loadGameData() {
    fetch(`${window.location.origin}/stayforgame/sfg_data/game.json`)
        .then((data) => {
            data.json().then((json) => {
                gameData = json;
                onloadgamedata();
            });
        });
}