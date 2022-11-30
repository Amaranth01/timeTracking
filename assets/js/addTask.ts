import {listTask} from "./createProject";

export let chrono : HTMLElement = document.createElement('i');

export const AddTask : any = function (this : any) {
    let validateNewTask : HTMLButtonElement = document.createElement('button');
    let inputNewTask : HTMLInputElement = document.createElement('input');

    this.newTask = () => {
        listTask.appendChild(inputNewTask);
        listTask.appendChild(validateNewTask);
        validateNewTask.innerText = "Valider la nouvelle tâche";

        validateNewTask.addEventListener('click', function () {

            chrono.className = "fa-solid fa-stopwatch";
            let taskName : string = inputNewTask.value;
            inputNewTask.remove();
            validateNewTask.remove();
            listTask.innerHTML += taskName.toString();
            listTask.appendChild(chrono);
        });
    }
}