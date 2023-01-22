<?php

namespace App\Controller;

class ErrorController extends AbstractController
{
//Returns to page 404
    public function error404()
    {
        $this->render('error/404');
    }
}