<?php
class getInfo
{
    public function __construct(){}
    public function getValueGame($v)
    {
        $t = explode('/', $_GET['url']);
        $file = file_get_contents("json/dtGame.json", "r");
        $fileJson = json_decode($file);
        $c = $t[1];
        if(empty($fileJson->game->$c->$v)){
            return null;
        }else{
            return ($fileJson->game->$c->$v);
        }
        
    }
    public function getPagGame()
    {
        $t = explode('/', $_GET['url']);
        return ($t[1]);
    }
    public function getTags()
    {
        $t = explode('/', $_GET['url']);
        $c = $t[1];
        $file = file_get_contents("json/dtGame.json", "r");
        $fileJson = json_decode($file);
        if(empty($fileJson->game->$c->tags)){
            return "stayforgame";
        }else{
            $tags = "stayforgame, jogos, online, ".$fileJson->game->$c->tags;
            return ($tags);
        }
    }
}

class getGame{
    public function __construct(){}
    public function get($g){
        $file = file_get_contents("json/dtGame.json", "r");
        $fileJson = json_decode($file);
        return $fileJson->$g;
    }
}

$getInfo = new getInfo();
$getGame = new getGame();
?>

<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <base href="/webSfg_PHP/" target="_top">
        <link rel="icon" href="img/icon/icon_top.png" type="image/x-icon">
        <link href="css/elementPx.css" rel="stylesheet">
        <link href="css/font.css" rel="stylesheet">
        <meta name="author" content="StayForGame">
    </head>
<?php  
    if($_GET){
        $url = explode('/', $_GET['url']);
    }
    if(isset($url)){
        if($url[0] == "home"){
            require_once 'p/'.$url[0].'/home.php';
        }elseif($url[0] == "game"){
            $t = explode('/', $_GET['url']);
            $a = $t[1];
            $c = $a;
            $f = file_get_contents("json/dtGame.json", "r");
            $fj = json_decode($f);
            if(in_array($t[1],$fj->gr)){
                require_once 'p/game/game.php';
            }else{
                require_once 'p/404.html';
            }
        }else{
            require_once 'p/404.html';
        }
    }else{
        require_once 'p/home/home.php';
    }
?>
</html>