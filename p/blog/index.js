function blog() {
    for (let i = 0; i < dtBlog.length; i++) {
        //let e = "<div class='sb sncBlue stgm'><div class='blogImg sb sncBlueInt' style=\"background-image:url(" + dtBlog[i].img + ");\"></span></div><div class='blogText'><p class='ft_titlePx txtS1'><b>" + dtBlog[i].title + "</b></p><p class='ft_textPx txtS4' style='margin: -5px;z-index: 2;'><b>" + dtBlog[i].data + "</b></p><br><p class='ft_textPx txtS3'>" + dtBlog[i].text + "</p></div></div>";
        let e = "<div class='sb sncGreen'><img class='sb sncGreenInt' src=\"" + dtBlog[i].img + "\"><section><h2 class='ft_titlePx alg_l'>" + dtBlog[i].title + "</h2><br><p class='ft_textPx alg_l'>" + dtBlog[i].text + "</p><p class='blogData ft_textPx alg_l txtS3'>" + dtBlog[i].data + "</p></section></div>"
        qs("#blog").innerHTML += e;
    }
    let docbo = document;
    let eCss = "<style>";
    for (let i = 1; i < dtBlog.length + 1; i++) {
        eCss += "#blog>div:nth-child(" + i + ") {animation: inSize 0.5s forwards ease-in-out " + (i / 10) + "s;}";
    }
    eCss += "</style>";
    docbo.head.innerHTML += eCss;
}

pagTag = "blog";

loadGame("https://raw.githubusercontent.com/Astro815/sfgBlogServer/main/dtBlog.json");