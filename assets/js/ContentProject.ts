import {body, buttonAddTask, listTask, otherUtils, title} from "./Project";
import {AddTask} from "./addTask";

export const  ContentProject : any = function (this : any) {
    this.projectContent = () => {
        let contentTask: HTMLDivElement = document.querySelector('.contentTask') as HTMLDivElement;

        body.appendChild(contentTask);
        contentTask.appendChild(title);
        contentTask.appendChild(listTask);
        contentTask.appendChild(otherUtils);
        otherUtils.appendChild(buttonAddTask);

        let getTitle : string |  null = localStorage.getItem("keyTitleProject");

        if(getTitle) {
            title.innerHTML = JSON.parse(getTitle);
            console.log(contentTask);JSON.parse(getTitle);
        }

        buttonAddTask.innerText = " + Ajouter une tâche ";
        let addTask = new AddTask();
        addTask.newTask();
    }
}