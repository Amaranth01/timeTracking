<?php

namespace App\Controller;

use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;

class UserController extends AbstractController
{

    public function loginPage() {
        $this->render('forms/login');
    }

    public function registerPage() {
        $this->render('forms/register');
    }

    /**
     * Action for connexion
     * @return void
     */
    public function login()
    {
        if($this->formSubmitted()) {
            $username =$this->clean($this->getFormField('username'));
            $password = $this->getFormField('password');

            $user = R::findOne('user', 'username=?', [$username]);
            if($user !== null) {
                password_verify($password, $user->password);
            }
            else {
                $_SESSION['errors'] = "Les mots de passe ne correspondent pas";
                self::loginPage();
            }
            $this->render('home/project');
        }
            self::registerPage();
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
            $user = R::dispense('user');
            $user->password = $this->getFormField('password');
            $user->username = $this->clean($this->getFormField('username'));
            $user->role = "user";


            // Returns an error if the password does not contain all the requested characters.
            if (!preg_match('/^(?=.*[!@#$%^&*-\])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/', $user->password)) {
                $_SESSION['errors'] = "Le mot de passe doit contenir une majuscule, un chiffre et un caractère spécial";
                self::registerPage();
            }

            // Passwords match
            if ($user->password === $this->getFormField('passwordR')) {
                $user->password = password_hash($user->password, PASSWORD_DEFAULT);
                try {
                    R::store($user);
                } catch (SQl $e){
                    echo "Une erreur est survenue lors de l'enregistrement en base de données";
                }
                var_dump($user);
                die();

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