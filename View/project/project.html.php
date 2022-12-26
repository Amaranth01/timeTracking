<?php

use RedBeanPHP\R;

if (!(new App\Controller\AbstractController)->userConnected()) {
    (new App\Controller\AbstractController)->render('forms/login');
    $_SESSION['errors'] = "Vous devez être connecté";
}

?>
<div id="main">
    <h2>Bienvenue sur votre espace de Time Tracking</h2>

    <button id="addProject">Créer un projet</button>
</div>


<?php
foreach ($data['project'] as $project) {
    ?>
    <div class="content">
        <h2> <?= $project->project_title ?> </h2>
        <div class="utils">
            <p>
                Création du projet <br> <br>
                <i class="fa-regular fa-calendar-days"> <?= $project->project_date ?> </i>
            </p>
            <?php
            foreach ($project->ownTaskList as $task) { ?>
            <p class="seeTime">
                Temps passé <br> <br>
                <i class="fa-regular fa-clock"> <?= $task->task_time ?> </i>
            </p>
        </div>

        <div class="listTask">
            <p><?= $task->task_name ?>
                <span><i class="fa-solid fa-stopwatch chrono" ></i></span>
            </p>
        </div> <?php
        } ?>
        <div class="otherUtils">
            <span><i class="fa-solid fa-trash"></i></span>
            <span><i class="fa-solid fa-eye suppress"></i></span>
            <button class="buttonAddTask">+ Ajouter une tâche</button>
        </div>
    </div>
    <?php
}
?>