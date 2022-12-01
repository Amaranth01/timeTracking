import {inputTitle, validateProjectName, title} from "./Project";

export const TitleProject : any = function (this : any) {
    validateProjectName.innerText = "Valider le nom du projet";
    this.projectName = () => {
        validateProjectName.addEventListener('click', function () {
            let projectTitle : string = inputTitle.value;
            title.innerHTML = projectTitle.toString();
            inputTitle.remove();
            validateProjectName.remove();

            window.localStorage.setItem("keyTitleProject", JSON.stringify(projectTitle.toString()));
            console.log(JSON.stringify(projectTitle.toString()));
        });
    }
}