<?php

namespace App\Model;

use R;
use RedBeanPHP\RedException\SQL;

class DB
{
    public static function PDO() {
        R::setup('mysql:host=localhost;dbname=time_tracking', 'root', '');

        $user = R::dispense('user');
        $project = R::dispense('project');
        $task = R::dispense('tasks');

        try {
            $insertId = R::store($user);
            $insertId = R::store($project);
            $insertId = R::store($task);
        } catch(SQL $e) {
            "Une erreur avec la base de données s'est produite";
        }
    }
}