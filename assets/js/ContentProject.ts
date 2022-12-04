import {AddTask} from "./addTask";

export const  ContentProject : any = function (this : any) {
    this.projectContent = () => {
        let title: HTMLHeadingElement = document.createElement('h1');
        let contentTask: HTMLDivElement = document.querySelector('.contentTask') as HTMLDivElement;
        let otherUtils2 : HTMLDivElement = document.createElement('div');
        let allTask: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        let listTask: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        let buttonAddTask: HTMLButtonElement = document.createElement('button');

        contentTask.appendChild(title);
        contentTask.appendChild(allTask);
        contentTask.appendChild(otherUtils2);
        otherUtils2.appendChild(buttonAddTask);
        title.className = "title";

        let getTitle : string |  null = localStorage.getItem("keyTitleProject");
        let getTask : string | null = localStorage.getItem('listTaskProject');

        if(getTitle) {
            title.innerHTML = JSON.parse(getTitle);
        }

        if(getTask) {
            allTask.innerHTML = JSON.parse(getTask);
        }

        buttonAddTask.innerText = " + Ajouter une tâche ";
        let addTask = new AddTask(listTask);
        addTask.newTask();
    }
}