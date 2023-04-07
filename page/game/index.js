let game = {};
let pgm = '';

class setPage {
    constructor() {}

    closeLoading() {

        $('body').classList.remove('load');

    }

    startup() {
        let name = game.name;
        let version = game.version;
        let desc = game.desc;
        let predesc = game.predesc;

        // Title Name and Last Version
        $(`title`).innerHTML = name;
        $(`[data-game='name']`).innerHTML = `${name} - ${version}`;
        $(`[data-game='vnews']`).innerHTML = `Novidades - ${version}`;

        // Images Logos and Banners
        $(`[data-game='logo']`).src = `../../assets/game/logo/${pgm}.png`;
        $(`[data-game='banner']`).style = `background-image: url('../../assets/game/banner/${pgm}.png');`;

        // Descriptions
        $(`[data-game='desc']`).innerHTML = desc;
        $(`[data-game='predesc']`).innerHTML = predesc;
    }

    link(name, ico, color, link) {
        return `
        <li class="pixBorder ${color}">
            <img src="../../assets/icon/${ico}.svg" alt="${name}">
            <a href="${link}" target="_blank" class="pixBorder red text1">
                <p>Jogar na ${name}</p>
            </a>
        </li>
        `;
    }

    // Define Access
    access() {
        let html = '';

        if (game.itchio != null) {
            html += this.link('Itch.Io', 'itchio', 'red', game.itchio);
        }

        if (game.gamejolt != null) {
            html += this.link('Game Jolt', 'gamejolt', 'green', game.gamejolt);
        }

        $('[data-game=access]').innerHTML = html;

    }

    // Define Tutorial
    tutorial() {
        let html = '';

        for (let how of game.cm) {
            html += `
            <h3>${how.title}:</h3>
            <p>${how.text}</p>
            `;
        }

        $(`[data-game='cm']`).innerHTML = html;
    }

    // Define Trailer
    trailer() {
        $(`[data-game='trailer']`).innerHTML = game.trailer == null ? "<h3>Não possui trailer.</h3>" : `<iframe class='pixBorder red in' src='${game.trailer}' title='${pgm} | StayForGame' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
        $('[data-game=trailer]').style = "height: auto;";
    }

    // Define Itens
    itens() {

        let html = '';

        if (game.item == undefined || game.item == null) {
            $("section[name='itens']").remove();
        } else {

            for (let item of game.item) {
                html += `
            <li class="pixBorder gray">
                <img class="pixBorder gray in darkBox" src="../../assets/game/item/${item.nfile}.png">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
            </li>
            `;
            }

            $("[data-game='itens']").innerHTML = html;
        }
    }

    other() {
        let html = '';

        if (game.other == null) return 0;
        for (const ot of game.other) {

            html += "<section class='pixBorder gray'>";

            if (ot.type == 'iframe') {
                html += `<h2>${ot.title}</h2><iframe class='fullSection pixBorder gray in' src='../other/${ot.link}'></iframe>`;
            } else if (ot.type == 'version') {
                html += `<h2>${ot.value}% completo</h2><meter class="meterVersion" value="${ot.value/100}">${ot.value}%</meter>`;
            }

            html += "</section>";

        }

        $('[data-game=other]').innerHTML = html;

    }

    createNew(news) {
        let html = "";
        // Addeds
        html += "<h3>Adicionados</h3>";
        if (news.ad != null) {
            for (let ad of news.ad) {
                html += `<p>${ad}</p>`;
            }
        } else {
            html += `<p>Nada Adicionado.</p>`;
        }

        // Removeds
        html += "<h3>Removidos</h3>";
        if (news.re != null) {
            for (let re of news.re) {
                html += `<p>${re}</p>`;
            }
        } else {
            html += `<p>Nada Removido.</p>`;
        }

        // Mod
        html += "<h3>Modificados</h3>";
        if (news.mo != null) {
            for (let mo of news.mo) {
                html += `<p>${mo}</p>`;
            }
        } else {
            html += `<p>Nada Modificado.</p>`;
        }

        // ReBug
        html += "<h3>Bugs Removidos</h3>";
        if (news.br != null) {
            for (let br of news.br) {
                html += `<p>${br}</p>`;
            }
        } else {
            html += `<p>Nenhum bugs removido.</p>`;
        }

        return html;
    }

    lastNews() {
        let news = game.new.filter(n => n.version == game.version)[0];

        $("[data-game=lastNews]").innerHTML = this.createNew(news);
    }

    allNews() {
        let html = '';

        for (let news of game.new) {
            html += `
            <input type="radio" id="version_${news.version}" name="versions">
            <label for="version_${news.version}" class="pixBorder red text1">
                <p>${news.version}</p>
                <div class="pixBorder red in darkBox">
                    ${this.createNew(news)}
                </div>
            </label>
            `;
        }

        $("[data-game=versions]").innerHTML = html;
    }

    // Define Credits
    credits(dt) {
        let html = '';

        for (let autor of dt) {
            html += `
            <div class="pixBorder gray">
                <img src="../../assets/icon/cuser.png" alt="Icone de Usuario">
                <div>
                    <a name="name" href="${autor.link}">${autor.name}</a>
                    <p name="desc">${autor.func}</p>
                </div>
            </div>
            `;
        }

        $("[data-game='credits']").innerHTML = html;
    }
}

function showPage() {
    // Game

    const urlParams = new URLSearchParams(window.location.search);
    pgm = urlParams.get('g');

    if (!data.gr.includes(pgm)) window.open('../404.html', '_top')

    game = data.game[pgm];
    let page = (n) => new setPage(n);

    page().startup();

    page().access();

    page().trailer();
    page().tutorial();

    page().itens();

    // Others
    page().other();

    page().lastNews();
    page().allNews();

    /*for (let btn of $$('input[name=versions]')) {
        btn.onclick = (e) => {
            if (e.target.checked) {
                e.target.checked = false;
            };
        }
    }*/

    page().credits(game.credits);

    page().closeLoading();
}

loadData('game', '../../');