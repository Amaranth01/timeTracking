<?php

namespace App\Controller;

use RedBeanPHP\R;

class TaskController extends AbstractController
{
    public function addTask(int $id = null)
    {

        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['taskName'];

        $project = R::findOne('project', 'id=?', [$id]);

        $task = R::dispense('task');
        $task->taskName = $this->clean($content);
        $project->ownTaskList[] = $task;
        R::store($task);
        R::store($project);
    }

    public function deleteTask(int $id)
    {
        $task = R::findOne('task', 'id=?', [$id]);
        R::trash($task);
        $this->render('project/taskPage');
    }
}