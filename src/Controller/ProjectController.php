<?php

namespace App\Controller;

use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;

class ProjectController extends AbstractController
{
    public function index() {
        $this->render("project/project");
    }

    public function addProject() {

        if(!isset($_POST['submit'])) {
            $_SESSION['errors'] = "Merci de laisser le bouton à sa place !";
            self::index();
        }

        if($this->formSubmitted()) {
            $project = R::dispense('project');
            $project->title;
            $project->date = \DateTime::createFromFormat('Y-m-d H:i:s', $project['date']);
            try {
                R::store($project);
            } catch (SQl $e){
                    var_dump($e);
            }
        }
    }
}