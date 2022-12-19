import {AddTask} from "./addTask";

export const  ContentProject : any = function (this : any) {
    this.projectContent = () => {
        let title: HTMLHeadingElement = document.createElement('h1');
        let contentTask: HTMLDivElement = document.querySelector('.contentTask') as HTMLDivElement;
        let otherUtils2 : HTMLDivElement = document.createElement('div');
        let allTask: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        let listTask: HTMLDivElement = document.createElement('div') as HTMLDivElement;
        let buttonAddTask: HTMLButtonElement = document.createElement('button');
        let editTask : HTMLElement = document.createElement('i');
        let deleteTask : HTMLElement = document.createElement('i');
        let chrono : HTMLElement = document.createElement('i');

        if(contentTask) {
            contentTask.appendChild(title);
            contentTask.appendChild(allTask);
            contentTask.appendChild(listTask);
            contentTask.appendChild(otherUtils2);
        }

        if (otherUtils2) {
            otherUtils2.appendChild(buttonAddTask);
        }


        title.className = "title";
        editTask.className = "fa-solid fa-pen-to-square";
        deleteTask.className = "fa-solid fa-trash";
        listTask.className = "listTask";
        chrono.className = "fa-solid fa-stopwatch";

        let getTitle : string |  null = localStorage.getItem("keyTitleProject");
        let getTask : string | null = localStorage.getItem('listTaskProject');

        if(getTitle) {
            title.innerHTML = JSON.parse(getTitle);
        }

        if(getTask) {
            let taskArray = JSON.parse(getTask);
            for(let i = 0; i < taskArray.length; i++) {
                allTask.innerHTML += taskArray[i];
                listTask.appendChild(allTask);
                allTask.appendChild(editTask);
                allTask.appendChild(chrono)
                allTask.appendChild(deleteTask);
            }
        }
        buttonAddTask.innerText = " + Ajouter une tâche ";
        let addTask = new AddTask(listTask, chrono);
        addTask.newTask();
    }
}