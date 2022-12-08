<?php
use App\Routing;

require '../Routing.php';
require '../vendor/autoload.php';
require '../Model/DB.php';

Routing::route();
session_start();