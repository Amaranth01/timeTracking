import {AddTask} from "./addTask";
import {MoreTask} from "./MoreTask";

export const ListProject: any = function (this:any) {
    this.allProject = () => {
        let addTask : NodeListOf<Element> = document.querySelectorAll('.addTask');

        for (let i = 0; i < addTask.length; i++) {
            addTask[i].addEventListener('click', function () {
                console.log("coucou");
                let moreTask = new MoreTask;
                moreTask.addTask();
            });
        }
    }
}