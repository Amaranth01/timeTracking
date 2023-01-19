<?php

namespace App\Controller;

use RedBeanPHP\R;

class TaskController extends AbstractController
{
    public function addTask(int $id = null)
    {
        if (empty($_POST['task'])) {
            $_SESSION['error'] = "Vous avez validé la tâche sans remplir le champ";
            $this->render('project/taskPage');
        }

        $project = R::findOne('project', 'id=?', [$_GET['id']]);
        $task = R::dispense('task');
        $task->taskName = $this->clean($this->clean($this->getFormField('task')));
        $task->project_id = $project->id;
        $project->ownTaskList[] = $task;
        R::store($task);
        R::store($project);
        $this->render("project/taskPage", [
            'project' => R::findOne('project', 'id=?', [$id]),
        ]);
    }

    public function deleteTask(int $id)
    {
        $task = R::findOne('task', 'id=?', [$id]);
        R::trash($task);
        $this->render('project/taskPage');
    }
}