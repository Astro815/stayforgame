<?php

#use function PHPSTORM_META\type;

function gntLink($link, $color, $icon, $text) {
    if (!empty($link)) {
        return("<span class='ptf sb snc".$color."'><img src='img/icon/icon_".$icon.".png'><button class='sb sncRed' onclick=\"window.open('".$link."','_top')\"><p class='ft_titlepx txtClick'><font size='4.5'>Jogue na ".$text."</font></p></button></span>");
    }
}

function gntOrther($o){
    if($o->type == "iframe"){
        echo "<div class='session sb sncGray'><h1 class='ft_titlePx'><big>".$o->title."</big></h1><br><iframe class='ortherIframe sb sncGrayInt' src='".$o->link."'></iframe>";
    }elseif ($o->type == "pnv") {
        echo "<div class=' session sb sncGray'><h1 class='ft_titlePx'><big>".$o->title."</big></h1><br><h3 class='ft_textPx1 alg_c '>".$o->value."% completo</h3><br><div class='pnv sb sncgrayint'><span style='width: ".$o->value."%;'></span></div>";
    }
    echo "</div><br style='line-height: 2em;'>";
}

function gntNvd($b, $title, $id, $index)
{
    $new = $b;
    if (empty($new[$index]->$id)) {
        print_r("<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>" . $title . "</b></h3><p class='ft_textPx alg_l txtS2 alg_tab1'>Nada.</p></span>");
    } else {
        print_r("<span class='textl1'><h3 class='ft_textPx1 alg_l txtS1'><b>" . $title . "</b></h3>");
        foreach ($new[$index]->$id as $nv) {
            print_r("<p class='ft_textPx alg_l txtS2 alg_tab1'>" . $nv . "</p>");
        }
        print_r("</span>");
    }
}
?>
<!--<!DOCTYPE html>-->

<head>
    <title><?php print_r($getInfo->getValueGame("name")); ?></title>
    <link href="p/game/index.css" rel="stylesheet">
    <meta name="description" content="<?php print_r($getInfo->getValueGame("desc")); ?>">
    <meta name="keywords" content="<?php print_r($getInfo->getTags());?>">
    <meta property="og:url" content="<?php echo "http://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="StayForGame">
    <meta property="og:description" content="Jogue a vontade, com jogos incríveis e simples!">
    <meta property="og:image" content="http://stayforgame.com/img/game/<?php print_r($getInfo->getPagGame()); ?>.png">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="stayforgame.indie.af">
    <meta property="twitter:url" content="https://stayforgame.com/game/<?php print_r($getInfo->getPagGame()); ?>">
    <meta name="twitter:title" content="StayForGame">
    <meta name="twitter:description" content="Jogue a vontade, com jogos incríveis e simples!">
    <meta name="twitter:image" content="img/game/<?php print_r($getInfo->getPagGame()); ?>.png">
</head>

<body>
    <nav>
        <!-- Top Boas Vindas -->
        <div class="session sb sncOrange">
            <p id="gmCap" class="sb sncOrangeInt" style="background-image: url(<?php print_r('img/game/cap/cap_' . $getInfo->getPagGame() . '.png'); ?>);">
                <img src="<?php print_r('img/game/logo/' . $getInfo->getPagGame() . '.png'); ?>">
            </p>
            <h2 id="gmTitle" class="ft_titlePx"><?php print_r($getInfo->getValueGame("name")); ?> - <?php print_r($getInfo->getValueGame("version")); ?></h2>
            <p id="gmPreDesc" class="ft_textPx"><?php print_r($getInfo->getValueGame("predesc")); ?></p>
        </div>
        <br style="line-height: 2em;">
        <!-- Jogos -->
        <div class="session sb sncGreen" style="display: flex;flex-direction: column;">
            <h1 class="ft_titlePx"><big>O Jogo</big></h1>
            <h3 class="ft_textPx1 alg_c">Jogue na plataforma...</h3><br style="line-height: 1em;">
            <section id="gmLink">
                <?php
                    print_r(gntLink($getInfo->getValueGame("itchio"), "Red", "itchio", "Itch.Io"));
                    print_r(gntLink($getInfo->getValueGame("gamejolt"), "Green", "gamejolt", "Game Jolt"));
                ?>
            </section>
            <br style="line-height: 1em;">
            <h3 class="ft_textPx1 alg_c"><?php print_r($getInfo->getValueGame("desc")); ?></h3><br>
            <p id="gmDesc" class="ft_textPx"></p>
        </div>
        <br style="line-height: 2em;">
        <!-- Como Jogar -->
        <div class="session sb sncBlue">
            <h1 class="ft_titlePx"><big>Como Jogar</big></h1>
            <section id="gmCm">
                <?php
                $cm = $getInfo->getValueGame("cm");
                foreach ($cm as $cmv) {
                    print_r('<span class="textl1"><h3 class="ft_textPx1 alg_l txtS1"><b>' . $cmv->title . '</b></h3>');
                    print_r('<p class="ft_textPx alg_l txtS2">' . $cmv->text . '</p></span>');
                }
                ?>
            </section>
        </div>
        <br style="line-height: 2em;">
        <!-- TRAILER -->
        <div class="session sb sncOrange">
            <h1 class="ft_titlePx"><big>Trailer</big></h1><br>
            <section id="gmTrailer">
                <?php
                if ($getInfo->getValueGame("trailer") == null) {
                    print_r('<h3 class="ft_textPx1 alg_c">Não possui trailer.</h3>');
                } else {
                    print_r('<iframe class="sb sncOrangeInt" src="' . $getInfo->getValueGame("trailer") . '" title="' . $getInfo->getValueGame("name") . ' | StayForGame" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                }
                ?>
            </section>
        </div>
        <!-- Itens -->
        <br style="line-height: 2em;">
        <div class="session sb sncYellow">
            <h1 class="ft_titlePx"><big>Itens</big></h1><br>
            <section id="gmItens">
                <?php
                $itens = $getInfo->getValueGame("item");
                if(!empty($itens)){
                foreach ($itens as $itemValue) {
                    print_r('<span class="sb sncGray"><img src="img/game/item/' . $itemValue->nfile . '.png"><section><h2 class="ft_titlePx">' . $itemValue->name . '</h2><p class="ft_textPx">' . $itemValue->desc . '</p></section></span>');
                }}else{
                    print_r('<h3 class="ft_textPx1 alg_c">Não possui itens.</h3>');
                }
                ?>
            </section>
        </div>
        <br style="line-height: 2em;">
        <!-- OUTROS -->
        <section id="gmorther">
        <?php
                $ot = $getInfo->getValueGame("other");
                if(!empty($ot)){
                foreach ($ot as $o) {
                    gntOrther($o);
                }}
                ?>
        </section>
        <!-- Verção mais Recente -->
        <div class="session sb sncBlue">
            <h1 class="ft_titlePx" id="gmNRVTitle"><big>Novidades - <?php print_r($getInfo->getValueGame("version")); ?></big></h1><br>
            <section id="gmNRV">
                <?php
                gntNvd($getInfo->getValueGame("new"), "Adicionado", "ad", 0);
                gntNvd($getInfo->getValueGame("new"), "Removido", "re", 0);
                gntNvd($getInfo->getValueGame("new"), "Modificado", "mo", 0);
                gntNvd($getInfo->getValueGame("new"), "Bugs Removidos", "br", 0);
                ?>
            </section>
        </div>
        <br style="line-height: 2em;">
        <div class="session sb sncGreen">
            <h1 class="ft_titlePx"><big>Versões</big></h1><br>
            <section id="gmVsn">
                <?php
                $vsn = $getInfo->getValueGame("new");
                $lgn_vsn = count($vsn);
                for ($i = 0; $i < $lgn_vsn; $i++) {
                    print_r("<button class='sb sncRed vsn_false' onclick='ocVsn(" . $i . ")' id='_vsn" . $i . "'><p class='txtClick ft_titlePx alg_c'><font size='5'>" . $vsn[$i]->version . "</font></p><br><section class='sb sncRedInt'>");
                    gntNvd($getInfo->getValueGame("new"), "Adicionado", "ad", $i);
                    gntNvd($getInfo->getValueGame("new"), "Removido", "re", $i);
                    gntNvd($getInfo->getValueGame("new"), "Modificado", "mo", $i);
                    gntNvd($getInfo->getValueGame("new"), "Bugs Removidos", "br", $i);
                    print_r("</section></button>");
                }
                ?>
            </section>
        </div>
        <br style="line-height: 2em;">
        <div class="session sb sncPurple">
            <h1 class="ft_titlePx"><big>Créditos</big></h1><br>
            <section id="gmCredit">
                <?php
                $cdt = $getInfo->getValueGame("credits");
                $l = function($p){if(!empty($p->link)){return "<a href='" . $p->link . "'>";}};
                foreach ($cdt as $p) {
                    print_r("<div class='slCredt sb sncGray'><img src='img/icon/icon.png'><section>".$l($p)."<h3 class='ft_textPx1 alg_l'>" . $p->name . "</h3></a><br><p class='ft_textPx1 alg_l'>" . $p->func . "</p></section></div>");
                }
                ?>
            </section>
        </div>
    </nav>
    <br>
    <iframe class="bottom" src="p/bottom.html" scrolling="no"></iframe>
</body>
<script src="js/main.js"></script>
<script>
    function resizeItens() {
        document.querySelectorAll("#gmItens > span").forEach((e) => {
        e.removeAttribute("style");
    })
        height = 0;
            document.querySelectorAll("#gmItens > span").forEach(e => {
                if (e.clientHeight > this.height) {
                    height = e.clientHeight;
                }
            })
            document.querySelectorAll("#gmItens > span").forEach((e) => {
                e.style.height = height + 25;
            })
    }

    function ocVsn(v) {
        qs("#_vsn" + v).classList.replace("vsn_" + JSON.parse('{"a":' + qs("#_vsn" + v).classList[2].replace("vsn_", "") + '}').a, "vsn_" + !JSON.parse('{"a":' + qs("#_vsn" + v).classList[2].replace("vsn_", "") + '}').a)
    }

    setInterval(function(){resizeItens()},1000);
</script>