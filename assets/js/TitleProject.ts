export const TitleProject : any = function (this : any, title : HTMLHeadingElement, inputTitle : HTMLInputElement, validateProjectName : HTMLButtonElement) {

    this.projectName = () => {
        validateProjectName.addEventListener('click', function () {
            let projectTitle : string = inputTitle.value;
            title.innerHTML = projectTitle.toString();
            inputTitle.remove();
            validateProjectName.remove();

            window.localStorage.setItem("keyTitleProject", JSON.stringify(projectTitle.toString()));
        });
    }
}