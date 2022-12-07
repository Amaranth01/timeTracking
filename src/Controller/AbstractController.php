<?php

namespace App\Controller;

class AbstractController
{
    public function render(string $template)
    {
        ob_start();
        require __DIR__ . '/../../View/' . $template . '.html.php';
        $html = ob_get_clean();
        require __DIR__ . '/../../View/base.html.php';
        exit;
    }
}