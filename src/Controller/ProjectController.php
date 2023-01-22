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
//add Porject to the DB (I know it's not a logical name)
    public function addTitle()
    {
        //get the json
        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['projectTitle'];

        //Prepare and send the data
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
//Add time to the DB
    public function addTime() {
        //get the json
        $json = file_get_contents('php://input');
        $payload = json_decode($json, true);
        $content = $payload['second'];
        //Search project table by id for update the time
        $time = R::load('project', $_GET['id']);
        $time->projectTime = $content;
        $secondTime = R::store($time);

        echo json_encode([
            'second' => $secondTime
        ]);
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