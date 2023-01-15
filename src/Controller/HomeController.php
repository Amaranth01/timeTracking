<?php
namespace App\Controller;

use RedBeanPHP\R;

class HomeController extends AbstractController
{
    public function index (){
        $this->render("project/project", [
            'project' => R::findAll('project'),
        ]);
        if(!$_SESSION['user']->id) {
            $this->render('forms/login');
        }
    }

    public function detailsProject (int $id){
        $this->render("project/taskPage", [
            'project' => R::findOne('project','id=?', [$id]),
        ]);
    }
}