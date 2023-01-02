<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Time Tracking</title>

</head>
<body>
<?php

if (isset($_SESSION['errors'])) {
    $errors = $_SESSION['errors'];
    unset($_SESSION['errors']);
    ?>
    <div class="message error">
        <?= $errors ?>
    </div> <?php
}
// Handling success messages.
if (isset($_SESSION['success'])) {
    $success = $_SESSION['success'];
    unset($_SESSION['success']);
    ?>
    <div class="message success">
        <?= $success ?>
    </div> <?php
}
?>
<div>
    <nav>
        <ul>
            <li><a href="/index.php?c=user&a=login-page">Connexion</a></li>
            <li><a href="/index.php?c=user&a=register-page">Inscription</a></li>
            <li><a href="/index.php?c=user&a=logout">Déconnexion</a></li>
        </ul>
    </nav>
</div>


<main class="container">
  <?= $html ?>
</main>

<script src="https://kit.fontawesome.com/f33464c73a.js" crossorigin="anonymous"></script>
<script src="/build/js/front-bundle.js"></script>

</body>
</html>