<?php 
require_once('../xanthippe/includes/sql-jperetz.php');
$selectlinks = $mysqli->query("select * from resource where ISDN is null and url is not null order by title");
while ($link = $selectlinks->fetch_object()) {
	$links[$link->resource_id] = $link;
}
$mysqli->close();	
require_once('../xanthippe/includes/JSON.php');
$json = new Services_JSON;
$linkList = $json->encode($links);
echo $linkList;