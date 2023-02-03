class GamePag {
    constructor() {}
    head(b) {
        $("title").innerText = `${b.name} - StayForGame`;
        $("#gmTitle").innerText = `${b.name} - ${b.version}`;
        $("#gmPreDesc").innerText = b.predesc;
        $("#gmDesc").innerText = b.desc;
        $("#gmCap").style.backgroundImage = `url(img/game/cap/cap_${gamepag}.png)`;
        $("#gmCap > img").src = `img/game/logo/${gamepag}.png`;
        $("#gmNRVTitle").innerHTML = `<big>Novidades da ${b.version}</big>v`;
    }
    link(link, color, icon, text) {
        if (link != null && link != undefined) {
            $("#gmLink").innerHTML += `<span class="ptf sb snc${color}"><img src="img/icon/icon_${icon}.png"><button class="sb sncRed" onclick="window.open(\'${link}\',\'_top\')"><p class="ft_titlepx txtClick"><font size="4.5">Jogue na ${text}</font></p></button></span>`;
        }
    }
    comoJogar(b) {
        if (b != null) {
            b.forEach(i => {
                $("#gmCm").innerHTML += `<span class="textl1"><h3 class="ft_textPx1 alg_l txtS1"><b>${i.title}:</b></h3><p class="ft_textPx alg_l txtS2">${i.text}</p></span>`;
            });
        } else {
            $("#gmCm").innerHTML += '<h3 class="ft_textPx1 alg_c">Não a nada aqui =|</h3>';
        }
    }
    other(b) {
        if (b != null) {
            b.forEach(o => {
                let e = "";
                if (o.type == "iframe") {
                    e += `<div class='session sb sncGray'><h1 class='ft_titlePx'><big>${o.title}</big></h1><br><iframe class='ortherIframe sb sncGrayInt' src='p/orther/${o.link}'></iframe>`;
                } else if (o.type == "pnv") {
                    e += `<div class=' session sb sncGray'><h1 class='ft_titlePx'><big>${o.title}</big></h1><br><h3 class='ft_textPx1 alg_c '>${o.value}% completo</h3><br><div class='pnv sb sncgrayint'><span style='width: ${o.value}%;'></span></div>`;
                }
                e += "</div><br style='line-height: 2em;'>";
                qs("#gmorther").innerHTML += e;
            });
        }
    }
    item(b) {
        if (b != null) {
            b.forEach(i => {
                $("#gmItens").innerHTML += `<span class='sb sncGray'><img src='img/game/item/${i.nfile}.png'><section><h2 class='ft_titlePx'>${i.name}</h2><p class='ft_textPx'>${i.desc}</p></section></span>`;
            });
        } else {
            $("#gmItens").innerHTML = "<h3 class='ft_textPx1 alg_c'>Não a nada aqui =|</h3>";
        }
    }
    trailer(b) {
        if (b != null) {
            $("#gmTrailer").innerHTML = `<iframe class='sb sncOrangeInt' src='${b}' title='${gamepag} | StayForGame' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        } else {
            $("#gmTrailer").innerHTML = `<h3 class='ft_textPx1 alg_c'>Não possui trailer.</h3>`;
        }
    }
    novidade(b, name, title, i, e) {
        let nvd = "";
        let element = "";
        if (b[i][name] != null) {
            b[i][name].forEach((n) => {
                nvd += `<p class='ft_textPx alg_l txtS2 alg_tab1 nvdStyle'>${n}</p>`;
            });
            element = `<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>${title}</b></h3>${nvd}</span>`;
        } else {
            element = `<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>${title}</b></h3><p class='ft_textPx alg_l txtS2 alg_tab1'>Nada.</p></span>`;
        }
        $(e).innerHTML += element;
    }
    creditos(b) {
        for (let i = 0; i < b.length; i++) {
            $("#gmCredit").innerHTML += `<div class='slCredt sb sncGray'><img src='img/icon/icon.png'><section><a href='${b[i].link}'><h3 class='ft_textPx1 alg_l'>${b[i].name}</h3></a><br><p class='ft_textPx1 alg_l'>${b[i].func}</p></section></div>`;
        }
    }
}

function ocVsn(v) {
    $(`#_vsn${v}`).classList.replace("vsn_" + JSON.parse('{"a":' + qs("#_vsn" + v).classList[2].replace("vsn_", "") + '}').a, "vsn_" + !JSON.parse('{"a":' + qs("#_vsn" + v).classList[2].replace("vsn_", "") + '}').a)
}

function resizeItens() {
    document.querySelectorAll("#gmItens > span").forEach((e) => {
        e.removeAttribute("style");
    })
    let height = 0;
    document.querySelectorAll("#gmItens > span").forEach((e) => {
        if (e.clientHeight > height) {
            height = e.clientHeight;
        }
    })
    document.querySelectorAll("#gmItens > span").forEach((e) => {
        e.style.height = height + 25;
    })
}

// MAIN FUNCTION

function applyGamePage() {
    const urlParams = new URLSearchParams(window.location.search);
    gamepag = urlParams.get('game');

    if (!dtGames['gr'].includes(gamepag)) {
        window.open("p/404.html", "_top");
    } else {

        let game = new GamePag();
        let base = dtGames.game[gamepag];

        game.head(base);

        game.link(base.itchio, "Red", "itchio", "Itch.Io");
        game.link(base.gamejolt, "Green", "gamejolt", "Game Jolt");

        game.comoJogar(base.cm);
        game.other(base.other);
        game.trailer(base.trailer);
        game.item(base.item);

        game.novidade(base.new, "ad", "Adicionado:", 0, "#gmNRV");
        game.novidade(base.new, "re", "Removido:", 0, "#gmNRV");
        game.novidade(base.new, "mo", "Modificações:", 0, "#gmNRV");
        game.novidade(base.new, "br", "Bugs Corrigidos:", 0, "#gmNRV");

        for (let i = 0; i < base.new.length; i++) {
            $("#gmVsn").innerHTML += `<button class='sb sncRed vsn_false' onclick='ocVsn(${i})' id='_vsn${i}'><p class='txtClick ft_titlePx alg_c'><font size='5'>${base.new[i].version}</font></p><br><section class='sb sncRedInt'></section></button>`;
            game.novidade(base.new, "ad", "Adicionado:", i, `#_vsn${i} > section`);
            game.novidade(base.new, "re", "Removido:", i, `#_vsn${i} > section`);
            game.novidade(base.new, "mo", "Modificações:", i, `#_vsn${i} > section`);
            game.novidade(base.new, "br", "Bugs Corrigidos:", i, `#_vsn${i} > section`);
        }
        game.creditos(base.credits);
        /*
            if (dtGames.game[gamepag].online == null) {
                qs("#divOG").innerHTML = "<h1 class='ft_titlePx'><big>Jogue Online</big></h1><br style='line-height: 1em;'><h3 class='ft_textPx1 alg_c'>Desculpe, não existe versão online desse jogo =(.</h3>"
            } else {
                qs("#playIframeGame").style.backgroundImage = "url(img/game/" + gamepag + ".png)";
            }
        */
        console.log("END");
    }
}

/* function startOnlineGame() {
    qs("#gmGO").innerHTML = "<iframe class='sb sncRedInt' id='iframeGame' src='" + dtGames.game[gamepag].online + "'></iframe>";
}*/

setInterval(() => { resizeItens() }, 1000);

// STARS

pagTag = "game";

loadGame("json/dtGame.json");

$("#gmCap > img").onload = () => {
    $("#load").classList.remove("loading");
}