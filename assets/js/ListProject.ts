import {taskArray} from "./Project";
import {AddTaskDb} from "./AddTaskDb";

export const ListProject: any = function (this: any) {
    this.allProject = () => {
        let task: HTMLDivElement = document.querySelector('.task') as HTMLDivElement;
        let addTask: HTMLButtonElement = document.querySelector('#addTask') as HTMLButtonElement;
        if(task) {


            addTask.addEventListener('click', function () {
                let inputNewTask: HTMLInputElement = document.createElement('input');
                let validateNewTask: HTMLButtonElement = document.createElement('button');

                task.appendChild(inputNewTask);
                task.appendChild(validateNewTask);
                validateNewTask.innerText = "Valider la nouvelle tâche";

                validateNewTask.addEventListener('click', function () {
                    let taskName: string = inputNewTask.value;
                    inputNewTask.remove();
                    validateNewTask.remove();
                    task.innerHTML += taskName.toString();
                    taskArray.push(taskName);

                    let addTaskDb = new AddTaskDb(taskName);
                    addTaskDb.addDb();
                });
            });
        }
    }
}