<?php

namespace App\Controller;

use RedBeanPHP\R;

class AbstractController
{
    public function render(string $template, array $data = [])
    {
        ob_start();
        require __DIR__ . '/../../View/' . $template . '.html.php';
        $html = ob_get_clean();
        require __DIR__ . '/../../View/base.html.php';
        exit;
    }
//Secures form data
    public function clean(string $data): string
    {
        $data = trim($data);
        $data = strip_tags($data);
        $data = htmlentities($data);

        return $data;
    }
//Checks that the form is submitted
    public function formSubmitted(): bool
    {
        return isset($_POST['submit']);
    }

    public function getFormField(string $field, $default = null)
    {
        if(!isset($_POST[$field])) {
            return (null === $default) ? '' : $default;
        }
        return $_POST[$field];
    }
}