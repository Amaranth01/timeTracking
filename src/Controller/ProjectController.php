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

    public function addTitle()
    {
        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['projectTitle'];

        $user = R::findOne('user', 'id=?', [$_SESSION['user']->id]);
        $project = R::dispense('project');
        $project->projectTime = 0;
        $project->projectDate = R::isoDate();
        $user->ownProjectList[] = $project;
        $project->projectTitle = $this->clean($content);
        $projectId = R::store($project);
        R::store($user);

        echo json_encode([
            'projectID' => $projectId
        ]);
    }

    public function addTime(int $id = null) {
        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['seconds'];
        $time = R::load('project', (int)[$id]);
        $time->projectTime = $content;
        R::store($time);
    }

    public function deleteProject(int $id = null) {
        $project = R::findOne('project', 'id=?', [$id]);
        $user = R::findOne('user', 'id=?', [$_SESSION['user']->id]);
        R::trash($project);

        $this->render("project/project", [
            'project' => R::findAll('project', 'ORDER BY id DESC'),
        ]);
    }
}