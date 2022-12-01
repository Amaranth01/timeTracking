import {body, buttonAddTask, content, otherUtils} from "./Project";
import {AddTask} from "./addTask";

export const  ContentProject : any = function (this : any) {
    this.projectContent = () => {

        body.appendChild(content);
        otherUtils.appendChild(buttonAddTask);

        buttonAddTask.innerText = " + Ajouter une tâche ";
        let addTask = new AddTask();
        addTask.newTask();

    }
}