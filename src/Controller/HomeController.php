<?php
namespace App\Controller;

class HomeController extends AbstractController
{
    public function index (){
        $this->render("project/project");
    }

}