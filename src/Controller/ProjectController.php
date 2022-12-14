<?php

namespace App\Controller;

use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;
class ProjectController extends AbstractController
{
    public function index()
    {
        $this->render("forms/login");
    }

    public function addProject()
    {
        $user = R::findOne('user', 'id', [$_SESSION['user']->id]);
        $project = R::dispense('project');
        $project->projectTitle = "titre temporaire";
        $project->projectDate = R::isoDateTime();
        $user->ownProjectList[] = $project;

        R::store($project);
        R::store($user);

        echo json_encode([
            'message' => "c'est tout good"
        ]);

        exit;
    }
}