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
            // Typical action to be performed when the document is ready:
            if (pagTag == "home") {
                dtGames = JSON.parse(xhttp.responseText);
                renderGame();
            } else if (pagTag == "game") {
                dtGames = JSON.parse(xhttp.responseText);
                applyGamePage();
            } else if (pagTag == "pre-blog") {
                dtBlog = JSON.parse(xhttp.responseText);
                preBlog()
            } else if (pagTag == "blog") {
                dtBlog = JSON.parse(xhttp.responseText);
                blog()
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function gogame(g) {
    window.open("p/game/?game=" + g, "_top")
}