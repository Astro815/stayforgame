const searchBox = $("#searchBox");

searchBox.oninput = (e) => {
    $(".listGames").innerHTML = "<h4>Carregando</h4>";

    if (searchBox.value != "") {
        let out = Object.values(gameData.game).filter(search);
        let order = [];
        for (let i = 0; i < out.length; i++) {
            order.push(gameData.gr[Object.values(gameData.game).findIndex((x) => { return x == out[i]; })]);
        }
        generateList(order, gameData.game);
        if(order.length == -1){
            $(".listGames").innerHTML = "";
        }
    } else {
        generateList(gameData.gr, gameData.game);
    }
};

function search(inp) {
    return String(`${inp.name.toLocaleLowerCase()}, ${inp.tags}`).includes(searchBox.value.toLocaleLowerCase());
}

onloadgamedata = () => {
    generateList(gameData.gr, gameData.game);
}

function generateList(order, list) {
    let html = "";

    for (let i = 0; i < order.length; i++) {
        let gid = order[i];
        let game = list[gid];
        html += `
        <li>
            <div>
                <div class="game_cape" alt="Capa de ${game.name}" style="background-image: url(../sfg_resources/game/cape/${gid}.png);"></div>
                <a href="../game/#${gid}" target="_top">Jogar</a>
            </div>
            <div>
                <h2>${game.name}</h2>
                <p>${game.desc}</p>
            </div>
        </li>
        `;
    }

    $(".listGames").innerHTML = html;
}

window.onload = () => {
    loadGameData();
};