<?php
namespace App\Controller;

use RedBeanPHP\R;

class HomeController extends AbstractController
{
    //Returns to the all project page
    public function index (){
        $this->render("project/project", [
            'project' => R::findAll('project', 'ORDER BY id DESC'),
        ]);
    }
//Return to the details project page
    public function detailsProject (int $id){
        $this->render("project/taskPage", [
            'project' => R::findOne('project','id=?', [$id]),
        ]);
    }
}