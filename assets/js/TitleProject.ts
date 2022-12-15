export const TitleProject : any = function (this : any, title : HTMLHeadingElement, inputTitle : HTMLInputElement, validateProjectName : HTMLButtonElement) {

    this.projectName = () => {
        validateProjectName.addEventListener('click', function () {
            let projectTitle : string = inputTitle.value;
            title.innerHTML = projectTitle.toString();
            inputTitle.remove();
            validateProjectName.remove();

            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/index.php?c=project&a=add-title');
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.responseType = "json";

            xhr.onload = function () {

                if(xhr.status === 404) {
                    alert("une erreur s'est produite");
                }else if (xhr.status === 400) {
                    alert('Un paramètre est manquant');
                }
                let response = xhr.response;
                projectTitle = response.projectTitle;
            }

            xhr.send(JSON.stringify({
                projectTitle: projectTitle
                //Possibilité de marque juste "projectTitle dans ce cas.
                //Là, il est instancié comme un objet
            }));
        });
    }
}