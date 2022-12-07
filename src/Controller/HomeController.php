<?php
namespace App\Controller;

class HomeController extends AbstractController
{
    public function index (){
        $this->render("project/project");
    }

    public function content() {
        $this->render("project/taskPage");
    }
}