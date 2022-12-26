<?php

use RedBeanPHP\R;

if (!(new App\Controller\AbstractController)->userConnected()) {
    (new App\Controller\AbstractController)->render('forms/login');
    $_SESSION['errors'] = "Vous devez être connecté";
}

?>

    <h2>Bienvenue sur votre espace de Time Tracking</h2>

    <button id="addProject">Créer un projet</button>

<?php
foreach ($data['project'] as $project) {
    ?>
    <div class="content">
        <h2> <?= $project->project_title ?> </h2>
        <div>
            <p>
                Date de la création du projet
                <i class="fa-regular fa-calendar-days"><?= $project->project_date ?></i>
            </p>
            <?php
            foreach ($project->ownTaskList as $task) { ?>
                <p>
                    Temps passé sur le projet
                    <i class="fa-regular fa-clock"><?= $task->task_time ?></i>
                </p>
                <div class="listTask">
                    <p><?= $task->task_name ?>
                        <span class="chrono"><i class="fa-solid fa-stopwatch"></i></span>
                    </p>
                </div> <?php
            } ?>
        </div>
    </div>
    <?php
}
?>