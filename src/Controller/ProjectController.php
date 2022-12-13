<?php

namespace App\Controller;

use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;

class ProjectController extends AbstractController
{
    public function index()
    {
        $this->render("project/project");
    }

    public function addProject()
    {

        if (!isset($_POST['submit'])) {
            $_SESSION['errors'] = "Merci de laisser le bouton à sa place !";
            self::index();
        }

        $payload = json_decode(file_get_contents('php://input'));
        if (empty($payload->content)) {
            // 400 = Bad Request.
            http_response_code(400);
            exit;
        }

        $project = R::dispense('project');
        $user = R::findOne('user', 'name=?', ['projectTitle']);
        $project->projectTitle = "titre temporaire";
        $project->projectDate = \DateTime::createFromFormat('Y-m-d H:i:s', $project);
        $project->ownUserList[] = $user;

        json_encode([
            'message' => 'ok mec'
        ]);

        echo http_response_code(200);
        exit;
    }
}