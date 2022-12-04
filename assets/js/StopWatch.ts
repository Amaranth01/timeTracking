import {chrono} from "./addTask";

export const StopWatch: any = function (this: any, seeTime: HTMLParagraphElement) {
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    let testTime: NodeJS.Timer;
    let stop: boolean = true;
        chrono.addEventListener('click', function (this: any) {
            if (stop) {
                stop = false;
                chrono.style.color = "darkgreen";
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
                clearInterval(testTime);
                chrono.style.color = "darkred";
            }
        });
    }
