import {chrono} from "./addTask";
import {seeTime} from "./Project";

export const StopWatch: any = function (this: any) {
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    let testTime: NodeJS.Timer;
    let stop: boolean = true;

    chrono.addEventListener('click', function (this: any) {
        if (stop) {
            console.log("chrono O?N")
            stop = false;
            testTime = setInterval(this.countUp = () => {
                seconds = parseInt(String(seconds));
                minutes = parseInt(String(minutes));
                hours = parseInt(String(hours));

                seconds++;

                if (seconds === 60) {
                    minutes++;
                    seconds = 0;
                }

                if (minutes === 60) {
                    hours++;
                    minutes = 0;
                }
                seeTime.innerText = `${hours} : ${minutes} : ${seconds}`;
            }, 1000);
        }
        else {
            stop = true;
            console.log("chrono OFF");
            clearInterval(testTime);
            chrono.style.color = "darkred";
        }
    });
}
