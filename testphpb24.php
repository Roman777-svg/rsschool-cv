<?php
  // $queryUrl = 'b24-czphql.bitrix24.ua/rest/1/5qck5bpdkb8522zh/user.search.json';


$queryUrl = 'http:b24-czphql.bitrix24.ua/rest/1/5qck5bpdkb8522zh/user.search.json';
if($queryUrl == ''){
  $array = array();
}
else{
  $array = json_decode($content);
};
var_dump($array );




?>

