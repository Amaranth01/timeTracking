import {taskArray} from "./Project";
import {AddTaskDb} from "./AddTaskDb";

export const AddTask: any = function (this: any, listTask: HTMLDivElement, chrono: HTMLElement) {
    let validateNewTask: HTMLButtonElement = document.createElement('button');
    let inputNewTask: HTMLInputElement = document.createElement('input');

    this.newTask = () => {
        listTask.appendChild(inputNewTask);
        listTask.appendChild(validateNewTask);
        validateNewTask.innerText = "Valider la nouvelle tâche";

        validateNewTask.addEventListener('click', function () {
            let taskName: string = inputNewTask.value;

            inputNewTask.remove();
            validateNewTask.remove();
            listTask.innerHTML += taskName.toString();
            listTask.appendChild(chrono);
            taskArray.push(taskName);

            let addTaskDb = new AddTaskDb(taskName);
            addTaskDb.addDb();
        });
    }
}