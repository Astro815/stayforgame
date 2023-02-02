<html>

<head>
    <title>StayForGame</title>
    <link href="p/home/index.css" rel="stylesheet">
    <meta name="keywords" content="Jogos, Game, Indie, StayForGame, Stay For Game, Astro, PypeDolls">

    <!-- HTML Meta Tags -->
    <meta name="description" content="Jogue a vontade, com jogos incríveis e simples!">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://stayforgame.com/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="StayForGame">
    <meta property="og:description" content="Jogue a vontade, com jogos incríveis e simples!">
    <meta property="og:image" content="https://stayforgame.com/img/cap.png">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="stayforgame.indie.af">
    <meta property="twitter:url" content="https://stayforgame.com/">
    <meta name="twitter:title" content="StayForGame">
    <meta name="twitter:description" content="Jogue a vontade, com jogos incríveis e simples!">
    <meta name="twitter:image" content="img/cap.png">

</head>

<body>
    <nav>
        <img class="topLg" src="img/icon/lgsfg.png" alt="Logo da empresa StayForGame">
        <!-- Top Boas Vindas -->
        <div class="session sb sncOrange">
            <h2 class="ft_titlePx">Bem Vindo</h2>
            <p class="ft_textPx">Temos vários jogos leves e bonitos para você!</p>
        </div>
        <br style="line-height: 2em;">
        <!-- Jogos -->
        <div class="session sb sncRed">
            <h2 class="ft_titlePx">Jogos</h2>
            <!-- Slot Games -->
            <div id="gm">
                <?php
                    $gi = $getGame->get("game");
                    foreach($getGame->get("gr") as $g){
                        echo "<div class='sb sncGreen stgm'><span class='sb sncGreenInt' style=\"background-image:url(img/game/".$g.".png);\"></span><p class='ft_titlePx txtS0'>".$gi->$g->name."</p><br style=\"line-height: 0.25em;\"><button class='sb sncRed' onclick='gogame(\"game/".$g."\")'><p class='ft_titlepx'><font size='6'>JOGAR</font></p></button></div>";
                    }
                ?>
            </div><br>
        </div>
        <br style="line-height: 2em;">
        <!-- Blog -->
        <div class="session sb sncYellow">
            <h1 class="ft_titlePx">Blog</h1>
            <h3 class="ft_textPx1 alg_c">Veja as últimas notícias!</h3>
            <section id="pre-blog" class="sb sncYellowInt">
            </section><br>
            <button class='sb sncGray' onclick='window.open("p/blog/index.html","_top")' style="position: relative;left: calc(50% - 6em);width: 12em;height: 2.5em;display: flex;align-content: center;align-items: center;justify-content: center;margin:1em;"><p class='ft_titlepx txtClick '><font size='5'>Ver Tudo</font></p></button>
        </div>
        <br style="line-height: 2em;">
        <!-- Donation -->
        <div class="session sb sncBlue">
            <h2 class="ft_titlePx">Donate!</h2>
            <br>
            <img class="iconDonation" src="img/icon/donation.png" alt="Coração para doação">
            <br>
            <p class="ft_textPx">Nos ajude a manter todos os jogos ativos e lançar mais atualizações e novos games para a sua diversão, doando R$5,00 já eh uma grande ajuda =]</p>
            <br>
            <!--<a href="https://www.instagram.com/stayforgame_studios/"><button class="sb sncPurple"><h2 class="ft_titlePx txtClick">APOIAR</h2></button></a>--><br>
            <button class='sb sncPurple' onclick='donate()' style="position: relative;left: calc(50% - 6em);width: 11em;"><p class='ft_titlepx txtClick '><font size='5 '>APOIAR</font></p></button>
        </div>
    </nav>
    <br>
    <iframe class="bottom" src="p/bottom.html" scrolling="no"></iframe>
</body>
<!--<script src="js/main.js"></script>
<script src="index.js"></script>-->
<script>
    function gogame(l){
window.open(l,"_top");
    }
</script>

</html>