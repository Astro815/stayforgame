function showPage(on) {
    switch (on) {
        case 'game':
            showGames();
            break;
        case 'blog':
            showBlog();
            break;
    }
}

function showGames() {
    let html = '';
    for (let ng of data.gr) {
        let game = data.game[ng];

        html += `
            <li class="pixBorder green asizeIn">
                <span class="pixBorder green in" style="background-image: url('assets/game/cape/${ng}.png')" alt="${game.name}"></span>
                <h2>${game.name}</h2>
                <button class="pixBorder red text0" data-open="${ng}"><p>jogar</p></button>
            </li>
            `;
    }

    $("#gridGames").innerHTML = html;

    for (let button of $$("#gridGames > li > button")) {
        button.onclick = () => {
            window.open(`page/game/?g=${button.dataset.open}`, '_top');
        }
    }

}

function showBlog() {
    let html = '';
    let i = 0;
    for (let blog of data) {
        if (i == 3) break;

        html += `
            <li class="pixBorder blue asizeIn">
                <p>${blog.data}</p>
                <span class="pixBorder blue in" style="background-image: url('${blog.img}')" alt="Image"></span>
                <h2>${blog.title}</h2>
                <p>${blog.text}</p>
            </li>
            `;
        i++;
    }

    $("#gridBlog").innerHTML = html;
}
window.onload = () => {
    // Load Data Games
    loadData('game');

    // Load Data Blog
    loadData('blog');
};