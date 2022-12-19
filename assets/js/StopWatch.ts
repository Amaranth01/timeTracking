import {chrono} from "./addTask";

export const StopWatch: any = function (this: any, seeTime: HTMLParagraphElement) {
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    let timePast: NodeJS.Timer;
    let stop: boolean = true;
        chrono.addEventListener('click', function (this: any) {
            if (stop) {
                stop = false;
                chrono.style.color = "darkgreen";
                timePast = setInterval(this.countUp = () => {
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
                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/index.php?c=task&a=add-time');
                xhr.responseType = 'json';

                xhr.onload = function () {

                    if(xhr.status === 404) {
                        alert("une erreur s'est produite");
                    }else if (xhr.status === 400) {
                        alert('Un paramètre est manquant');
                    }
                    let response = xhr.response;
                    seconds = response.seconds;
                }

                xhr.send(JSON.stringify({
                    seconds: seconds
                }));
                clearInterval(timePast);
                chrono.style.color = "darkred";
            }
        });
    }
