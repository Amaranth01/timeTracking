<?php
use App\Routing;

require '../Routing.php';
require '../vendor/autoload.php';

Routing::route();

session_start();