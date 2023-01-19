<?php

use RedBeanPHP\R;
//secured for user not connected
if (!isset($_SESSION['user'])) {
    $_SESSION['error'] = "Veuillez vous connecter pour avoir accès à vos projets";
    (new App\Controller\AbstractController)->render('forms/login');
}


?>

    <h2>Bienvenue sur votre espace de Time Tracking</h2>
    <div>
        <button id="addProject">Créer un projet</button>
    </div>

<?php
foreach ($data['project'] as $project) {
    $task = R::find('task', 'project_id=?', [$project->id]);
    ?>
    <div class="content" id="<?= $project->id ?>">
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

            foreach ($task as $tasks) { ?>
                <p>
                    <?= $tasks->taskName ?>
                </p>

            <?php } ?>
        </div>

        <div class="otherUtils">
                <span><a href="/index.php?c=project&a=delete-project&id=<?= $project->id ?>"><i
                                class="fa-solid fa-trash suppress"></i></a></span>
            <span><a href="/index.php?c=home&a=details-project&id=<?= $project->id ?>" title="Ajout de tâche / voir le détail">
                    <i class="fa-solid fa-eye"></i> Ajouter les tâches</a></span>
        </div>
    </div>
    <?php
}

?>