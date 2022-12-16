import {taskArray, taskStorage} from "./Project";

export let chrono : HTMLElement = document.createElement('i');

export const AddTask : any = function (this : any, listTask: HTMLDivElement) {
    let validateNewTask : HTMLButtonElement = document.createElement('button');
    let inputNewTask : HTMLInputElement = document.createElement('input');

    this.newTask = () => {
        listTask.appendChild(inputNewTask);
        listTask.appendChild(validateNewTask);
        validateNewTask.innerText = "Valider la nouvelle tâche";

        validateNewTask.addEventListener('click', function () {
            let taskName : string = inputNewTask.value;
            chrono.className = "fa-solid fa-stopwatch";
            inputNewTask.remove();
            validateNewTask.remove();
            listTask.innerHTML += taskName.toString();
            listTask.appendChild(chrono);
            taskArray.push(taskName);


            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/index.php?c=task&a=addTask');
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.responseType = "json";

            xhr.onload = function () {
                if(xhr.status === 404) {
                    alert("une erreur s'est produite");
                }else if (xhr.status === 400) {
                    alert('Un paramètre est manquant');
                }
                let response = xhr.response;
                taskName = response.taskName;
                console.log(taskName);
            }
            xhr.send(JSON.stringify({
                taskName: taskName
            }));
        });
    }
}