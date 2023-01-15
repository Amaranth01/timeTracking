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

    <div class="task">
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
            <span><span class="seeTime"></span><i class="fa-solid fa-stopwatch chrono"></i> Total d'heures passées : <?= $project->projectTime ?> </span>
            <button id="addTask">Ajouter une tâche</button>
        </p>
    </div>
</div>