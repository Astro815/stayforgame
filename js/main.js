const $ = e => { return document.querySelector(e) };
const $$ = e => { return document.querySelectorAll(e) };

let data = {};

function loadData(name, cd) {
    let partern = cd == undefined ? '' : cd;
    let ref = '';

    switch (name) {
        case 'game':
            ref = `${partern}data/game.json`;
            break;
        case 'blog':
            ref = `https://raw.githubusercontent.com/Astro815/sfgBlogServer/main/dtBlog.json`;
            break;
    }

    fetch(ref)
        .then(resp => {
            resp.json().then(out => {
                data = out;
                showPage(name);
            });
        })
        .catch(console.error);
}