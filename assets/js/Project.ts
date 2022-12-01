import {AddTask} from "./addTask";
import {StopWatch} from "./StopWatch";

let addProject : HTMLButtonElement = document.querySelector('#addProject') as HTMLButtonElement;
let body : HTMLElement = document.querySelector('body') as HTMLElement;
export let listTask : HTMLDivElement = document.createElement('div') as HTMLDivElement;
export let seeTime : HTMLParagraphElement = document.createElement('p');

export const CreateProject : any = function (this : any) {
    this.newProject = () => {
        addProject.addEventListener('click', function () {
            let content : HTMLDivElement = document.createElement('div') as HTMLDivElement;
            let title : HTMLElement = document.createElement('h1') as HTMLElement;
            let validateProjectName : HTMLButtonElement = document.createElement('button');
            let inputTitle : HTMLInputElement = document.createElement('input') as HTMLInputElement;
            let utils : HTMLDivElement = document.createElement('div') as HTMLDivElement;
            let time : HTMLElement = document.createElement('i');
            let calendar : HTMLElement = document.createElement('i');
            let pCalendar : HTMLParagraphElement = document.createElement('p');
            let deleteProject : HTMLElement = document.createElement('i');
            let otherUtils :HTMLDivElement = document.createElement('div');
            let seeProject : HTMLElement = document.createElement('i');
            let buttonAddTask : HTMLButtonElement = document.createElement('button');
            let link : HTMLAnchorElement = document.createElement('a');

            content.className = "content";
            title.className= "title";
            inputTitle.className = 'inputTitle';
            validateProjectName.className = "validateProject";
            time.className = "fa-regular fa-clock";
            calendar.className = "fa-solid fa-calendar-days";
            listTask.className = "listTask";
            otherUtils.className = "otherUtils";
            deleteProject.className = "fa-solid fa-trash";
            seeProject.className = "fa-solid fa-eye";

            content.style.marginTop = "1rem";
            content.style.width = "45rem";
            content.style.height = "32rem";

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

            validateProjectName.innerText = "Valider le nom du projet";

            validateProjectName.addEventListener('click', function () {
                let titleProject : string = inputTitle.value;
                title.innerHTML = titleProject.toString();
                inputTitle.remove();
                validateProjectName.remove();
            });
            buttonAddTask.addEventListener('click', () => {
                let addTask = new AddTask();
                addTask.newTask();
            });
                let startChrono = new StopWatch;
                startChrono.countUp();
        });
    }
}