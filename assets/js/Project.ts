import {AddTask} from "./addTask";
import {StopWatch} from "./StopWatch";
import {TitleProject} from "./TitleProject";

let addProject: HTMLButtonElement = document.querySelector('#addProject') as HTMLButtonElement;
export let body: HTMLElement = document.querySelector('body') as HTMLElement;
export let listTask: HTMLDivElement = document.createElement('div') as HTMLDivElement;
export let seeTime: HTMLParagraphElement = document.createElement('p');
export let validateProjectName: HTMLButtonElement = document.createElement('button');
export let inputTitle: HTMLInputElement = document.createElement('input') as HTMLInputElement;
export let title: HTMLElement = document.createElement('h1') as HTMLElement;
export let buttonAddTask: HTMLButtonElement = document.createElement('button');
export let otherUtils: HTMLDivElement = document.createElement('div');

export const CreateProject: any = function (this: any) {
    this.newProject = () => {
        if (addProject) {
             addProject.addEventListener('click', function () {
                let content: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                let utils: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                let time: HTMLElement = document.createElement('i');
                let calendar: HTMLElement = document.createElement('i');
                let pCalendar: HTMLParagraphElement = document.createElement('p');
                let deleteProject: HTMLElement = document.createElement('i');
                let seeProject: HTMLElement = document.createElement('i');
                let link: HTMLAnchorElement = document.createElement('a');

                content.className = "content";
                title.className = "title";
                inputTitle.className = 'inputTitle';
                validateProjectName.className = "validateProject";
                time.className = "fa-regular fa-clock";
                calendar.className = "fa-solid fa-calendar-days";
                listTask.className = "listTask";
                otherUtils.className = "otherUtils";
                deleteProject.className = "fa-solid fa-trash";
                seeProject.className = "fa-solid fa-eye";

                buttonAddTask.innerText = " + Ajouter une tâche ";
                seeTime.innerHTML = "00:00:00";

                body.appendChild(content);
                content.appendChild(inputTitle);
                content.appendChild(validateProjectName);
                content.appendChild(title);
                content.appendChild(utils);
                utils.appendChild(calendar);
                content.appendChild(listTask);
                content.appendChild(otherUtils);
                utils.appendChild(time);
                utils.appendChild(seeTime);
                otherUtils.appendChild(deleteProject);
                otherUtils.appendChild(link);
                otherUtils.appendChild(buttonAddTask);
                link.appendChild(seeProject);


                link.href = "taskPage.html";

                let titleProject = new TitleProject();
                titleProject.projectName();

                buttonAddTask.addEventListener('click', function () {
                    let addTask = new AddTask();
                    addTask.newTask();
                });

                let startChrono = new StopWatch;
                startChrono.countUp();
            });
        }
    }
}

window.localStorage.setItem("keepProject", JSON.stringify(CreateProject.toString()));
window.localStorage.getItem("keepProject");
