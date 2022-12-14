import {AddTask} from "./addTask";
import {StopWatch} from "./StopWatch";
import {TitleProject} from "./TitleProject";

export let addProject: HTMLInputElement = document.querySelector('#addProject') as HTMLInputElement;
export let body: HTMLElement = document.querySelector('body') as HTMLElement;
const arrayProject: string[] = [];
export let taskArray: string[] = [];
export let taskStorage: Storage = localStorage;

export const CreateProject: any = function (this: any) {
    this.newProject = () => {
        if (addProject) {
            addProject.addEventListener('click', function (e) {
                e.preventDefault();
                let title: HTMLHeadingElement = document.createElement('h1');
                let listTask: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                let otherUtils: HTMLDivElement = document.createElement('div');
                let content: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                let utils: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                let time: HTMLElement = document.createElement('i');
                let calendar: HTMLElement = document.createElement('i');
                let supress: HTMLElement = document.createElement('i');
                let seeProject: HTMLElement = document.createElement('i');
                let link: HTMLAnchorElement = document.createElement('a');
                let inputTitle: HTMLInputElement = document.createElement('input') as HTMLInputElement;
                let validateProjectName: HTMLButtonElement = document.createElement('button');
                let seeTime: HTMLParagraphElement = document.createElement('p');
                let buttonAddTask: HTMLButtonElement = document.createElement('button');

                content.className = "content";
                title.className = "title";
                inputTitle.className = 'inputTitle';
                validateProjectName.className = "validateProject";
                time.className = "fa-regular fa-clock";
                calendar.className = "fa-solid fa-calendar-days";
                listTask.className = "listTask";
                otherUtils.className = "otherUtils";
                supress.className = "fa-solid fa-trash";
                seeProject.className = "fa-solid fa-eye";
                buttonAddTask.innerText = " + Ajouter une tâche ";
                seeTime.innerHTML = "00:00:00";
                validateProjectName.innerText = "Valider le nom du projet";

                body.appendChild(content);
                content.appendChild(inputTitle);
                content.appendChild(validateProjectName);
                content.appendChild(title);
                content.appendChild(utils);
                content.appendChild(listTask);
                content.appendChild(otherUtils);
                utils.appendChild(calendar);
                utils.appendChild(time);
                utils.appendChild(seeTime);
                otherUtils.appendChild(supress);
                otherUtils.appendChild(link);
                otherUtils.appendChild(buttonAddTask);
                link.appendChild(seeProject);

                link.href = "/index.php?c=home&a=content";

                let titleProject = new TitleProject(title, inputTitle, validateProjectName);
                titleProject.projectName();

                buttonAddTask.addEventListener('click', function () {
                    let addTask = new AddTask(listTask);
                    addTask.newTask();
                });

                let startChrono = new StopWatch(seeTime);
                startChrono.countUp;

                arrayProject.push(CreateProject.newProject);
                taskStorage.setItem("keepProject", JSON.stringify(arrayProject));

                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/index.php?c=project&a=add-project');

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
}