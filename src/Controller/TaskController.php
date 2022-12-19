<?php

namespace App\Controller;

use RedBeanPHP\R;

class TaskController extends AbstractController
{
    public function addTask() {
        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['taskName'];

        $project = R::findOne('project', 'id=?',[$_SESSION['project']->id]);
        $task = R::dispense('task');
        $task->taskTime = 0;
        $task->taskName = $this->clean($content);
        $_SESSION['task']= $task;
        $project->ownTaskList[] = $task;
        R::store($task);
        R::store($project);

        exit();
    }

    public function addTime(int $id = null) {
        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['seconds'];
        $time = R::load('task', $_SESSION['task']);
        $time->taskTime = $content;
        R::store($time);
    }
}