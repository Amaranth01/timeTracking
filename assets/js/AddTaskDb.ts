export const AddTaskDb: any = function (this : any, taskName : string) {
    this.addDb = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/index.php?c=task&a=add-task');
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
        }
        xhr.send(JSON.stringify({
            taskName: taskName
        }));
    }
}