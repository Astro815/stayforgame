const btnDonate = new ClipboardJS("#btnDonate");

btnDonate.on("success", () => {
    const popupMain = $("#popupMain");
    popupMain.innerHTML = "";

    const popup = "<div class='popupAnimed'>Você copiou a Chave.</div>";

    popupMain.innerHTML = popup;
});

onloadgamedata = () => {
    let html = "";

    for (let i = 0; i < 4; i++) {
        const idg = gameData.gr[i];
        const game = gameData.game[idg];
        html += `
        <div>
            <div style="background-image: url('sfg_resources/game/cape/${idg}.png');" alt="Desc Game IMG"></div>
            <p>${game.name}</p>
            <a href="game/#${idg}" target="_top">JOGAR</a>
        </div>
        `;
    }

    $("#fg").innerHTML = html;
}

window.onload = () => {
    loadGameData();
};