function renderGame() {
    for (var i = 0; i < dtGames.gr.length; i++) {
        let e = "<div class='sb sncGreen stgm'><span class='sb sncGreenInt' style=\"background-image:url(img/game/" + dtGames.gr[i] + ".png);\"></span><p class='ft_titlePx txtS0'>" + dtGames.game[dtGames.gr[i]].name + "</p><br style=\"line-height: 0.25em;\"><button class='sb sncRed' onclick='gogame(\"" + dtGames.gr[i] + "\")'><p class='ft_titlepx'><font size='6'>JOGAR</font></p></button></div>";
        qs("#gm").innerHTML += e;
    }
    pagTag = "pre-blog";
    loadGame("https://raw.githubusercontent.com/Astro815/sfgBlogServer/main/dtBlog.json");
}

function donate() {
    navigator.clipboard.writeText("fc7b17a7-d101-4c08-89f6-0cadc71ef9e1");
    alert("Obrigado, mas ainda não acabou!\nVá até o seu PicPay e clique em pagar e depois em chave aleatória, após isso cole a chave que você copiou automaticamente no espaço pedido, selecione o valor que queria ajudar e clique em \"Pagar\" e pronto! Obrigado pela sua doação =]")
}

function preBlog() {
    for (var i = 0; i < Math.min(3, dtBlog.length); i++) {
        let e = "<div class='sb sncBlue stgm'><p class='ft_textPx txtS4' style='margin: -5px;z-index: 2;'><b>" + dtBlog[i].data + "</b></p><span class='sb sncBlueInt' style=\"background-image:url(" + dtBlog[i].img + ");\"></span><p class='ft_titlePx txtS1'><b>" + dtBlog[i].title + "</b></p><br><p class='ft_textPx txtS3'>" + dtBlog[i].text + "</p><br></div>";
        qs("#pre-blog").innerHTML += e;
    }
}



// STARS

pagTag = "home";

loadGame("json/dtGame.json");