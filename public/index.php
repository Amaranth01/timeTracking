<?php
use App\Routing;
use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;
use Symfony\Component\ErrorHandler\Debug;

require '../Routing.php';
require '../vendor/autoload.php';

R::setup('mysql:host=localhost;dbname=time_tracking', 'root', '');
//R::getDatabaseAdapter()->getDatabase()->stringifyFetches(false);
//R::getDatabaseAdapter()->getDatabase()->getPDO()->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
Debug::enable();
Routing::route();
session_start();