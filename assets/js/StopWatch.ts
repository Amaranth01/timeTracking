export const StopWatch: any = function (this: any) {
    let chrono: HTMLElement = document.querySelector('.chrono') as HTMLElement;
    let seeTime: HTMLSpanElement = document.querySelector('.seeTime') as HTMLSpanElement;
    let time: HTMLSpanElement = document.querySelector('#totalTime') as HTMLSpanElement;
    let totalTime: number;
    let hours: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    let timePast: NodeJS.Timer;
    let stop: boolean = true;
    const urlParam = new URLSearchParams(window.location.search)
    const id = urlParam.get('id');
    if (chrono) {
        chrono.addEventListener('click', function (this: any) {
            if (stop) {
                //starting the count time
                stop = false;
                chrono.style.color = "darkgreen";
                timePast = setInterval(this.countUp = () => {
                    seconds = parseInt(String(seconds));
                    minutes = parseInt(String(minutes));
                    hours = parseInt(String(hours));
                    seconds++;
                    //Comparison to establish hours and minutes
                    if (seconds === 60) {
                        minutes++;
                        seconds = 0;
                    }
                    if (minutes === 60) {
                        hours++;
                        minutes = 0;
                    }
                    //Displays the time spent in the span
                    seeTime.innerText = `${hours} : ${minutes} : ${seconds}`;
                }, 1000);
            } else {
                //stop the time
                stop = true;
                clearInterval(timePast);
                chrono.style.color = "darkred";
                //Add time spent in database
                const xhr = new XMLHttpRequest();
                //send to the function add task
                xhr.open('POST', '/index.php?c=project&a=add-time&id=' + id);
                xhr.responseType = 'json';

                //Recovery of inner containing numbers to convert and add them
                let value = parseInt(time.innerText);
                totalTime = value + seconds;

                xhr.onload = function () {
                    if (xhr.status === 404) {
                        alert("une erreur s'est produite");
                    } else if (xhr.status === 400) {
                        alert('Un paramètre est manquant');
                    }
                    let response = xhr.response;
                    totalTime = response.second;
                }
                xhr.send(JSON.stringify({
                    second: totalTime,
                }));
            }
        });
    }
}
