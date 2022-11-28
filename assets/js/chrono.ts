import {BeginningWork} from "./startChrono";

let timeSpent: HTMLButtonElement = document.querySelector('#timeSpent') as HTMLButtonElement;
let stop: boolean = true;

export const StopWatch: any = function (this: any) {
    this.start = () => {
        if (stop) {
            timeSpent.addEventListener('click', function () {
                let beginningWork: any = new BeginningWork();
                beginningWork.go();
            });
        }

        if (!stop) {
            timeSpent.addEventListener('click', function () {
                let beginningWork: any = new BeginningWork();
                beginningWork.stop();
            });
        }

    }
}