<?php

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
            <p>
                Temps passé sur le projet : <br> <br>
                <i class="fa-regular fa-clock"> <?= $project->projectTime ?> </i>
            </p>
        </div>
            <div class="task">
            <?php
                foreach ($project->ownTaskList as $task) { ?>
                    <p>
                        <?= $task->taskName ?>
                        <span><i class="fa-solid fa-stopwatch chrono"></i></span>
                    </p>

                <?php } ?>
            </div>

        <div class="otherUtils">
            <span><i class="fa-solid fa-trash suppress"></i></span>
            <span><a href="/index.php?c=home&a=details-project&id=<?= $project->id ?>">
                    <i class="fa-solid fa-eye"></i></a></span>
            <button class="addTask">+ Ajouter une tâche</button>
        </div>
    </div>
    <?php
}
?>