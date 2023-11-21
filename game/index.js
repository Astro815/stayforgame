let game = {};
let id = {};

class PAGE {
    constructor() { }
    loadGame() {
        id = window.location.hash.replace("#", "");
        game = gameData.game[id];
    }

    upgrade() {
        this.loadGame();

        this.setColor(game.color);
        this.setText(game.name, game.desc);
        this.setImg(id);

        this.defineLink(game.itchio, game.gamejolt);

        this.setTutorial(game.cm);

        this.setTrailer(game.trailer);
        this.setItens(game.item);

        this.setVersions(game.new);

        this.setCredits(game.credits, game.name);

        setLoading(false);
    }

    /* PARAMETROS */

    setColor(color) {
        $("#stylePage").innerHTML = `
        :root{
            --gameColor: ${color};
        }
        `;
    }

    setText(name, desc) {
        $("#game_name").textContent = name;
        $("#game_desc").textContent = desc;
    }

    setImg(idg) {
        $("body").style.backgroundImage = `url(../sfg_resources/game/tileBg/${idg}.png)`;
        $("#game_banner").style.backgroundImage = `url(../sfg_resources/game/banner/${idg}.png)`;
        $("#game_logo").src = `../sfg_resources/game/logo/${idg}.png`;
    }

    defineLink(itch, gamejolt) {
        if (itch == null) {
            $("#link_itchio").setAttribute("disabled", "");
        } else {
            $("#link_itchio").href = itch;
        }

        if (gamejolt == null) {
            $("#link_gamejolt").setAttribute("disabled", "");
        } else {
            $("#link_gamejolt").href = gamejolt;
        }
    }

    setTutorial(tutorial) {
        let html = "";

        for (let param of tutorial) {
            html += `
            <h4>${param.title}:</h4>
            <p>${param.text}.</p>
            `;
        }

        $("#game_tutorial").innerHTML = html;
    }

    setTrailer(trailer) {
        if (trailer == null) {
            $("#game_trailer").style.display = "none";
        } else {
            $("#game_trailer > iframe").src = trailer;
        }
    }

    setItens(itens) {
        if(itens == null){
            $("#game_itens > div").setAttribute("disabled", "");
            return 0;
        }
        let html = "";

        for (let item of itens) {
            html += `
            <div>
                <img src="../sfg_resources/game/item/${item.id}.png">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>`;
        }

        $("#game_itens > div").innerHTML = html;
    }

    setVersions(versions) {
        // Set List
        let htmlList = "";
        for (let v of versions) {
            htmlList += `
            <option value="${v.version}">${v.version}</option>
            `;
        }
        $("#inVersion").innerHTML = htmlList;

        showVersion(versions[0]);
    }

    setCredits(credits, name){
        let out = [];
        
        for(let people of credits){
            out.push(`<cite>${people.name}</cite> com ${ people.func.length == 1 ? "o cargo" : "os cargos" } de ${people.func.join(", ")}`);
        }
        
        let html = `Os devidos creditos do jogo ${name} ${ credits.length == 1 ? "vai" : "vão" } para ${out.join(", ")}.`;

        $("#game_credits > p").innerHTML = html;
    }
}

onloadgamedata = () => {
    new PAGE().upgrade();
};

function showVersion(version) {
    let html = "";

    let area = (title, idv, none) => {
        return `
        <h3>${title}</h3>
        <ul>
            ${areaOp(idv, none)}
        </ul>`;
    };

    let areaOp = (idv, none) => {
        let r = "";
        if(idv == null){
            r = `<li>${none}</li>`;
        }else{
        for (let t of idv) {
            r += `<li>${t}</li>`;
        }}
        return r;
    }

    // Ad
    html = `
    ${area("Adicionados", version["ad"], "Nada adicionado.")}
    ${area("Removidos", version["re"], "Nada removido.")}
    ${area("Modificações", version["mo"], "Nada modificado.")}
    ${area("Bugs Removidos", version["br"], "Nenhum bug removido.")}
    `;

    $("#version").innerHTML = html;
}

$("#inVersion").onchange = (e)=>{
    let version = game.new.filter((x)=>{ return x.version == $("#inVersion").value;})[0];
    showVersion(version);
}

let setLoading = (v) => {
    $("body").setAttribute("class", v ? "loading" : "");
};

window.onload = () => {
    setLoading(true);
    loadGameData();
};