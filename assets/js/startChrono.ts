// let chrono : HTMLElement = document.querySelector('#chrono') as HTMLElement;
// let hours : number = 0;
// let minutes : number = 0;
// let seconds :number = 0;
//
// // chrono.innerHTML = "00:00:00";
//
// export const BeginningWork : any = function (this:any) {
//     setInterval(this.go = () => {
//         seconds = parseInt(String(seconds));
//         minutes = parseInt(String(minutes));
//         hours = parseInt(String(hours));
//
//         seconds++;
//
//         if (seconds === 60) {
//             minutes++;
//             seconds = 0;
//         }
//
//         if (minutes === 60) {
//             hours++;
//             minutes = 0;
//         }
//         chrono.innerText = `${hours} : ${minutes} : ${seconds}`;
//     },1000);
// }
//
// export const StopWork : any = function(this:any) {
//     this.finish = () => {
//         clearInterval(setInterval(this.go));
//     }
// }