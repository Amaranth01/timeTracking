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

    public function addTitle() {

        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['projectTitle'];

        $user = R::findOne('user', 'id', [$_SESSION['user']->id]);
        $project = R::dispense('project');
        $project->project_title = "titre temporaire";
        $project->projectDate = R::isoDateTime();
        $user->ownProjectList[] = $project;

        R::store($project);
        R::store($user);

        $project->project_title = $content;
        R::store($project);

        exit();
    }
}