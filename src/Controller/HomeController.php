<?php
namespace App\Controller;

use RedBeanPHP\R;

class HomeController extends AbstractController
{
    public function index (){
        $this->render("project/project", [
            'project' => R::findAll('project', $_SESSION['user']->id),
        ]);
    }
}