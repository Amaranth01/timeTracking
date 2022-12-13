import {addProject} from "./Project";

export const StorageProject = function () {
        if (addProject) {

            addProject.addEventListener('click', function () {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'json';

                xhr.open('post', '/index.php?c=project&a=add-project');
                xhr.onload = function () {
                    if (xhr.status === 404) {
                        alert("une erreur s'est produite");
                    } else if (xhr.status === 400) {
                        alert('Un paramètre est manquant');
                    }
                }
                xhr.send();
            });
    }
}