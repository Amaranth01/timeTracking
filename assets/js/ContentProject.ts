import {buttonAddTask, otherUtils} from "./Project";
import {AddTask} from "./addTask";

export const  ContentProject : any = function (this : any) {
    this.projectContent = () => {

        window.localStorage.getItem("TitleProject");
        console.log(window.localStorage.getItem("TitleProject"));

        otherUtils.appendChild(buttonAddTask);

        buttonAddTask.innerText = " + Ajouter une tâche ";
        let addTask = new AddTask();
        addTask.newTask();

    }
}