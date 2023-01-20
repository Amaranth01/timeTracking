<?php

use RedBeanPHP\R;

if (!isset($_SESSION['user'])) {
    $_SESSION['error'] = "C'est pas bien de couper par les liens";
    (new App\Controller\AbstractController)->render('forms/login');
}

$project = R::findOne('project', "id =?", [$_GET['id']]);
$task = R::findAll('task', 'project_id=?', [$project->id]);

?>
<h2>Détail de votre projet</h2>
<a href="/index.php?c=home&a=index">Retour à votre liste des projets</a>
<div class="contentTask">
    <div class="main">
        <h2> <?= $project->projectTitle ?> </h2>
    </div>

    <div class="task">
        <?php
        foreach ($task as $tasks) { ?>
            <p class="ListTask">
                <span>
                    <?= $tasks->taskName ?>
                </span>

                <span id="manageTask">
                    <a href=""><i class="fa-solid fa-pen-to-square"></i></a>
                    <a href=""><i class="fa-solid fa-trash suppress"></i></a>
                </span>
            </p>
        <?php } ?>
    </div>
    <div>
        <p>
            <span class="seeTime"></span>
            <i class="fa-solid fa-stopwatch chrono"></i>
            Total d'heures passées : <?= $project->projectTime ?>
        </p>
        <form action="/index.php?c=task&a=add-task&id=<?= $project->id ?>" method="post">
            <label for="task"></label>
            <input type="text" id="task" name="task">

            <input type="submit" id="button" name="submit" value="Ajoutez une tâche">
        </form>
    </div>
</div>