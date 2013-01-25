<?php
session_start();

if (!isset($_SESSION['user'])) {
	header('Location: ../xanthippe/login.php?redirect='.$_SERVER['REQUEST_URI']);
}
?>