function gntLink(link, color, icon, text) {
    if (link != null) {
        qs("#gmLink").innerHTML += "<span class='ptf sb snc" + color + "'><img src='/img/icon/icon_" + icon + ".png'><button class='sb sncRed' onclick=\"window.open('" + link + "','_top')\"><p class='ft_titlepx txtClick'><font size='4.5'>Jogue na " + text + "</font></p></button></span>";
    }
}

function gntOrther(o) {
    let e = "";
    if (o.type == "iframe") {
        e += "<div class='session sb sncGray'><h1 class='ft_titlePx'><big>" + o.title + "</big></h1><br><iframe class='ortherIframe sb sncGrayInt' src='" + o.link + "'></iframe>"
    } else if (o.type == "pnv") {
        e += "<div class=' session sb sncGray'><h1 class='ft_titlePx'><big>" + o.title + "</big></h1><br><h3 class='ft_textPx1 alg_c '>" + o.value + "% completo</h3><br><div class='pnv sb sncgrayint'><span style='width: " + o.value + "%;'></span></div>"
    }
    e += "</div><br style='line-height: 2em;'>";
    qs("#gmorther").innerHTML += e;
}

function gntItem(i) {
    let item = "<span class='sb sncGray'><img src='/img/game/item/" + i.nfile + ".png'><section><h2 class='ft_titlePx'>" + i.name + "</h2><p class='ft_textPx'>" + i.desc + "</p></section></span>";
    qs("#gmItens").innerHTML += item;
}

function ocVsn(v) {
    qs("#_vsn" + v).classList.replace("vsn_" + JSON.parse('{"a":' + qs("#_vsn" + v).classList[2].replace("vsn_", "") + '}').a, "vsn_" + !JSON.parse('{"a":' + qs("#_vsn" + v).classList[2].replace("vsn_", "") + '}').a)
}

let nvd = "";

function gntNovidades(name, title, i, e) {
    let element = "";
    if (dtGames.game[gamepag].new[i][name] != null) {
        nvd = "";
        dtGames.game[gamepag].new[i][name].forEach((n) => { nvd += "<p class='ft_textPx alg_l txtS2 alg_tab1 nvdStyle'>" + n + "</p>"; });
        element = "<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>" + title + "</b></h3>" + nvd + "</span>";
    } else {
        element = "<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>" + title + "</b></h3><p class='ft_textPx alg_l txtS2 alg_tab1'>Nada.</p></span>";
    }
    qs(e).innerHTML += element;
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

    qs("title").innerText = dtGames.game[gamepag].name + " - StayForGame";
    qs("#gmTitle").innerText = dtGames.game[gamepag].name + " - " + dtGames.game[gamepag].version;
    qs("#gmPreDesc").innerText = dtGames.game[gamepag].predesc;
    qs("#gmDesc").innerText = dtGames.game[gamepag].desc;
    qs("#gmCap").style.backgroundImage = "url(/img/game/cap/cap_" + gamepag + ".png)";
    qs("#gmCap > img").src = "/img/game/logo/" + gamepag + ".png";

    gntLink(dtGames.game[gamepag].itchio, "Red", "itchio", "Itch.Io");
    gntLink(dtGames.game[gamepag].gamejolt, "Green", "gamejolt", "Game Jolt");

    if (dtGames.game[gamepag].cm != null) {
        for (let i = 0; i < dtGames.game[gamepag].cm.length; i++) {
            let cm = "<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>" + dtGames.game[gamepag].cm[i].title + ":</b></h3><p class='ft_textPx alg_l txtS2'>" + dtGames.game[gamepag].cm[i].text + "</p></span>";
            qs("#gmCm").innerHTML += cm;
        }
    } else {
        qs("#gmCm").innerHTML += "<h3 class='ft_textPx1 alg_c'>Não a nada aqui =|</h3>";
    }

    if (dtGames.game[gamepag].other != null) {
        dtGames.game[gamepag].other.forEach(gntOrther);
    }
    if (dtGames.game[gamepag].trailer != null) {
        qs("#gmTrailer").innerHTML = "<iframe class='sb sncOrangeInt' src='" + dtGames.game[gamepag].trailer + "' title='Em Breve versão 1.9.0 do Pepe Dolls | Spoiler | StayForGame' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    } else {
        qs("#gmTrailer").innerHTML = "<h3 class='ft_textPx1 alg_c'>Não possui trailer.</h3>"
    }


    if (dtGames.game[gamepag].item != null) {
        dtGames.game[gamepag].item.forEach(gntItem);
    } else {
        qs("#gmItens").innerHTML = "<h3 class='ft_textPx1 alg_c'>Não a nada aqui =|</h3>";
    }

    qs("#gmNRVTitle").innerHTML = "<big>Novidades da " + dtGames.game[gamepag].version + "</big>v";

    gntNovidades("ad", "Adicionado:", 0, "#gmNRV");
    gntNovidades("re", "Removido:", 0, "#gmNRV");
    gntNovidades("mo", "Modificações:", 0, "#gmNRV");
    gntNovidades("br", "Bugs Corrigidos:", 0, "#gmNRV");

    for (let i = 0; i < dtGames.game[gamepag].new.length; i++) {
        let ei = dtGames.game[gamepag].new;
        //console.log([ei, i, ei[i]])
        qs("#gmVsn").innerHTML += "<button class='sb sncRed vsn_false' onclick='ocVsn(" + i + ")' id='_vsn" + i + "'><p class='txtClick ft_titlePx alg_c'><font size='5'>" + ei[i].version + "</font></p><br><section class='sb sncRedInt'></section></button>";
        gntNovidades("ad", "Adicionado:", i, "#_vsn" + i + " > section");
        gntNovidades("re", "Removido:", i, "#_vsn" + i + " > section");
        gntNovidades("mo", "Modificações:", i, "#_vsn" + i + " > section");
        gntNovidades("br", "Bugs Corrigidos:", i, "#_vsn" + i + " > section");
    }

    if (dtGames.game[gamepag].online == null) {
        qs("#divOG").innerHTML = "<h1 class='ft_titlePx'><big>Jogue Online</big></h1><br style='line-height: 1em;'><h3 class='ft_textPx1 alg_c'>Desculpe, não existe versão online desse jogo =(.</h3>"
    } else {
        qs("#playIframeGame").style.backgroundImage = "url(/img/game/" + gamepag + ".png)";
    }

    for (let i = 0; i < dtGames.game[gamepag].credits.length; i++) {
        let ei = dtGames.game[gamepag].credits;
        qs("#gmCredit").innerHTML += "<div class='slCredt sb sncGray'><img src='/img/icon/icon.png'><section><a href='" + ei[i].link + "'><h3 class='ft_textPx1 alg_l'>" + ei[i].name + "</h3></a><br><p class='ft_textPx1 alg_l'>" + ei[i].func + "</p></section></div>";
    }
}

function startOnlineGame() {
    qs("#gmGO").innerHTML = "<iframe class='sb sncRedInt' id='iframeGame' src='" + dtGames.game[gamepag].online + "'></iframe>";
}

function tick() {
    resizeItens()
}

setInterval(() => { tick() }, 500);

// STARS

pagTag = "game";

loadGame("/json/dtGame.json");