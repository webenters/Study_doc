
1.// 过滤标签

$content = preg_replace("/\s+/", " ", $content); //过滤多余回车
$content = preg_replace("/<[ ]+/si","<",$content); //过滤<__("<"号后面带空格)
$content = preg_replace("/<\!–.*?–>/si","",$content); //注释
$content = preg_replace("/<(\!.*?)>/si","",$content); //过滤DOCTYPE
$content = preg_replace("/<(\/?p.*?)>/si","",$content); //过滤html标签
$content = preg_replace("/<(\/?span.*?)>/si","",$content); //过滤html标签
$content = preg_replace("/<(\/?html.*?)>/si","",$content); //过滤html标签
$content = preg_replace("/<(\/?head.*?)>/si","",$content); //过滤head标签
$content = preg_replace("/<(\/?meta.*?)>/si","",$content); //过滤meta标签
$content = preg_replace("/<(\/?body.*?)>/si","",$content); //过滤body标签
$content = preg_replace("/<(\/?link.*?)>/si","",$content); //过滤link标签
$content = preg_replace("/<(\/?form.*?)>/si","",$content); //过滤form标签
$content = preg_replace("/cookie/si","COOKIE",$content); //过滤COOKIE标签
$content = preg_replace("/<(applet.*?)>(.*?)<(\/applet.*?)>/si","",$content); //过滤applet标签
$content = preg_replace("/<(\/?applet.*?)>/si","",$content); //过滤applet标签
$content = preg_replace("/<(style.*?)>(.*?)<(\/style.*?)>/si","",$content); //过滤style标签
$content = preg_replace("/<(\/?style.*?)>/si","",$content); //过滤style标签
$content = preg_replace("/<(title.*?)>(.*?)<(\/title.*?)>/si","",$content); //过滤title标签
$content = preg_replace("/<(\/?title.*?)>/si","",$content); //过滤title标签
$content = preg_replace("/<(object.*?)>(.*?)<(\/object.*?)>/si","",$content); //过滤object标签
$content = preg_replace("/<(\/?objec.*?)>/si","",$content); //过滤object标签
$content = preg_replace("/<(noframes.*?)>(.*?)<(\/noframes.*?)>/si","",$content); //过滤noframes标签
$content = preg_replace("/<(\/?noframes.*?)>/si","",$content); //过滤noframes标签
$content = preg_replace("/<(i?frame.*?)>(.*?)<(\/i?frame.*?)>/si","",$content); //过滤frame标签
$content = preg_replace("/<(\/?i?frame.*?)>/si","",$content); //过滤frame标签
$content = preg_replace("/<(script.*?)>(.*?)<(\/script.*?)>/si","",$content); //过滤script标签
$content = preg_replace("/<(\/?script.*?)>/si","",$content); //过滤script标签
$content = preg_replace("/javascript/si","Javascript",$content); //过滤script标签
$content = preg_replace("/vbscript/si","Vbscript",$content); //过滤script标签
$content = preg_replace("/on([a-z]+)\s*=/si","On\\1=",$content); //过滤script标签
$content = preg_replace("/&#/si","&＃",$content); //过滤script标签
$content = preg_replace( "@<(.*?)>@is", "", $content ); 
$content = preg_replace("/(\s|\&nbsp\;|　|\xc2\xa0)/", "", strip_tags($content));

// 过滤特殊符号
$find = array('#','$','￥','^','&','\\',);
// $find = array('`','·','~','!','！','@','#','$','￥','%','^','……','&', '*', '(', ')', '（', '）', '-', '_', '——','+', '=', '|', '\\','[', ']', '【', '】', '{', '}', ';', '；', ':', '：', '\'','"', '“', '”', ',', '，', '<', '>','《','》','.','。','/','、','?','？', );

$content = str_replace($find, '', $content);
$title = str_replace($find, '', $title);

$content = str_replace(array("&nbsp;","&amp;nbsp;","\t","\r\n","\r","\n"),array("","","","","",""),$content);

$content= htmlspecialchars_decode($content); 
$content= preg_replace("/<(.*?)>/","",$content);