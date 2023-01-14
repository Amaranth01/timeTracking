<?php
    if (isset($data['project'])) {
        $project = $data['project'];
    }
?>

<h2>Détail de votre projet</h2>
<div class="contentTask">
    <div class="main">
        <h2> <?= $project->projectTitle ?> </h2>
    </div>

    <div id="contentDetails">
        <?php foreach ($project->ownTaskList as $task) { ?>
            <p class="ListTask">
                <span>
                    <?= $task->taskName ?>
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
            <span><i class="fa-solid fa-stopwatch"></i> Total d'heures passées : <?= $task->task_time ?> </span>
            <button class="addTask"> + Ajouter une tâche</button>
        </p>
    </div>
</div>