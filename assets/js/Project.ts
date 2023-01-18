import {AddTask} from "./addTask";
import {StopWatch} from "./StopWatch";
import {TitleProject} from "./TitleProject";

let addProject: HTMLInputElement = document.querySelector('#addProject') as HTMLInputElement;
let body: HTMLElement = document.querySelector('body') as HTMLElement;
export let taskArray: string[] = [];
export const CreateProject: any = function (this: any) {
    this.newProject = () => {
        //Create a new project
        if (addProject) {
            addProject.addEventListener('click', function (e) {
                e.preventDefault();

                //Create all elements for the new project
                let title: HTMLHeadingElement = document.createElement('h1');
                let content: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                let link: HTMLAnchorElement = document.createElement('a');
                let inputTitle: HTMLInputElement = document.createElement('input') as HTMLInputElement;
                let validateProjectName: HTMLButtonElement = document.createElement('button');

                //Attribute class of the elements
                content.className = "projectCreating";
                title.className = "title";
                inputTitle.className = 'inputTitle';
                validateProjectName.className = "validateProject";
                validateProjectName.innerText = "Valider le projet";

                //Insert the child elements in the parents elements
                body.appendChild(content);
                content.appendChild(inputTitle);
                content.appendChild(link)
                link.appendChild(validateProjectName);
                content.appendChild(title);

                //Object for creating the project
                let titleProject = new TitleProject(title, inputTitle, validateProjectName, link);
                titleProject.projectName();
            });
        }
    }
}