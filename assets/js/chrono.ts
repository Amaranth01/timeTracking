// import {BeginningWork, StopWork} from "./startChrono";
//
// let timeSpent: HTMLButtonElement = document.querySelector('#timeSpent') as HTMLButtonElement;
// let stop: boolean = true;
//
//
// export const StopWatch: any = function (this: any) {
//     this.start = () => {
//         if (stop) {
//             timeSpent.addEventListener('click', function () {
//                 let beginningWork: any = new BeginningWork();
//                 beginningWork.go();
//                 timeSpent.style.color = "darkgreen";
//                 return stop = false;
//             });
//         }
//         else {
//             timeSpent.addEventListener('click', function () {
//                 let stopWork : any = new StopWork();
//                 stopWork.finish();
//                 timeSpent.style.color = "darkgreen";
//                 return stop = true;
//             });
//         }
//     }
// }