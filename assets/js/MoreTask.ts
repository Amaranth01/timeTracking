import {AddTaskDb} from "./AddTaskDb";
import {taskArray} from "./Project";

export const MoreTask: any = function (this: any) {
    let task: NodeListOf<Element> = document.querySelectorAll('.task');

    this.addTask = () => {
        let chrono : HTMLElement = document.querySelector('.chrono') as HTMLElement;
        if (chrono) {
            task.forEach(taskElement => {
                let validateNewTask: HTMLButtonElement = document.createElement('button');
                let inputNewTask: HTMLInputElement = document.createElement('input');
                let newTask: HTMLElement = document.createElement('div');

                taskElement.appendChild(newTask);
                newTask.appendChild(inputNewTask);
                newTask.appendChild(validateNewTask);
                newTask.appendChild(chrono);
                validateNewTask.innerText = "Valider la nouvelle tâche";

                validateNewTask.addEventListener('click', function () {
                    let taskName: string = inputNewTask.value;

                    inputNewTask.remove();
                    validateNewTask.remove();
                    newTask.innerHTML += taskName.toString();
                    taskArray.push(taskName);

                    let addTaskDb = new AddTaskDb(taskName);
                    addTaskDb.addDb();
                });
            });
        }
    }
}