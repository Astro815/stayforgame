// VARS

let qs = (e) => { return document.querySelector(e); };
let $ = (e) => { return document.querySelector(e); };
let dtGames = null;
let dtBlog = null;
let gamepag = "";
let pagTag = "";

// FUNC

function loadGame(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            switch (pagTag) {
                case "home":
                    dtGames = JSON.parse(xhttp.responseText);
                    renderGame();
                    break;
                case "game":
                    dtGames = JSON.parse(xhttp.responseText);
                    applyGamePage();
                    break;
                case "pre-blog":
                    dtBlog = JSON.parse(xhttp.responseText);
                    preBlog();
                    break;
                case "blog":
                    dtBlog = JSON.parse(xhttp.responseText);
                    blog();
                    break;
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function gogame(g) {
    window.open("p/game/?game=" + g, "_top")
}