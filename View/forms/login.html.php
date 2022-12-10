<h2>Connectez-vous</h2>
<p>Connectez-vous pour réussir à créer vos projets</p>

<form action="/index.php?c=user&a=login" method="post">
    <label for="username">Votre pseudo</label>
    <input type="text" name="username" id="username">

    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">

    <input type="submit" name="submit" value="Valider">
</form>

<p>Pas de compte ? <a href="/index.php?c=user&a=register">Inscrivez-vous ici.</a></p>