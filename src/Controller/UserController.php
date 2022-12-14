<?php

namespace App\Controller;

use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;

class UserController extends AbstractController
{

    public function loginPage()
    {
        $this->render('forms/login');
    }

    public function registerPage()
    {
        $this->render('forms/register');
    }

    /**
     * Action for connexion
     * @return void
     */
    public function login()
    {
        if ($this->formSubmitted()) {

            $username = $this->clean($this->getFormField('username'));
            $password = $this->getFormField('password');

            $user = R::findOne('user', 'user_name=?', [$username]);

            if ($user !== null) {
                password_verify($password, $user->password);
                $_SESSION['user'] = $user;
            } else {
                $_SESSION['errors'] = "Le mot de passe n'est pas correct";
                self::loginPage();
            }
            $this->render('project/project');
        }
        $this->render("project/project");
    }

    /**
     * Action for register
     * @return void
     * @throws SQL
     */
    public function register()
    {
        if (!isset($_POST['submit'])) {
            self::registerPage();
            $_SESSION['errors'] = "Merci de laisser le bouton à sa place !";
            exit();
        }

        if (empty(($_POST['username']) || empty($_POST['password']) || empty($_POST['passwordR']))) {
            $_SESSION['errors'] = "Merci de remplir tous les champs";
            self::registerPage();
        }

        if ($this->formSubmitted()) {
            // Returns an error if the password does not contain all the requested characters.
            if (!preg_match('/^(?=.*[!@#$%^&*-\])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/', $this->getFormField('password'))) {
                $_SESSION['errors'] = "Le mot de passe doit contenir une majuscule, un chiffre et un caractère spécial";
                self::registerPage();
            }
            // Passwords match register data in DB
            if ($this->getFormField('password') === $this->getFormField('passwordR')) {
                //create table in DB
                $user = R::dispense('user');
                $user->userPassword = password_hash($this->getFormField('password'), PASSWORD_DEFAULT);
                $user->userName = $this->clean($this->getFormField('username'));
                $user->userRole = "user";
                //insert data in DB
                $insert = R::store($user);


                $successMessage = "Votre inscription a été validée";
                $_SESSION['success'] = $successMessage;
                self::loginPage();
            } else {
                $_SESSION['errors'] = "Les mots de passe ne correspondent pas";
                self::registerPage();
            }
        }
    }

    public function logout()
    {
        session_destroy();
        $this->render('home/login');
    }
}