import {inputTitle, validateProjectName, title} from "./Project";

export const TitleProject : any = function (this : any) {
    validateProjectName.innerText = "Valider le nom du projet";
    this.projectName = () => {
        validateProjectName.addEventListener('click', function () {
            let titleProject : string = inputTitle.value;
            title.innerHTML = titleProject.toString();
            inputTitle.remove();
            validateProjectName.remove();
            window.localStorage.setItem("TitleProject", JSON.stringify(titleProject.toString()));
            console.log(JSON.stringify(titleProject.toString()));
        });
    }
}


