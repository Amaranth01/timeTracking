<?php
use App\Routing;
use RedBeanPHP\R;
use Symfony\Component\ErrorHandler\Debug;

require '../Routing.php';
require '../vendor/autoload.php';
session_start();

R::setup('mysql:host=localhost;dbname=time-tracking', 'root', 'Pimousse.01');
Debug::enable();
Routing::route();

