import '../css/style.scss'

let buttonNumber: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("buttonNumber") as HTMLCollectionOf<HTMLButtonElement>;
let input : HTMLInputElement = document.getElementById('output') as HTMLInputElement;
let buttonOperande :HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("operande") as HTMLCollectionOf<HTMLButtonElement>;
let buttonEgal: HTMLButtonElement = document.getElementById('calcul') as HTMLButtonElement;
let buttonPoint: HTMLButtonElement = document.getElementById('comma')as HTMLButtonElement;
let number1: number;
let number2: number;
let operand: string;

for(let i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener('click', function () {
        let value: string = this.innerText;
        let temp: number = parseInt(value);
        if(value.length > 0 ) {
            input.innerHTML += temp.toString();
        }
    });
}

for(let i = 0; i < buttonOperande.length; i++) {
    buttonOperande[i].addEventListener('click', function () {
        number1 = parseInt(input.innerHTML);
        operand = this.innerText;
        input.innerHTML ="";
    });
}

function calcul() {
    input.value = "";
    buttonEgal.addEventListener('click', function () {
        number2 = parseInt(input.innerHTML);
        switch (operand) {
            case '*' :
                input.innerHTML = (number1 * number2).toString();
                break;
            case '-' :
                input.innerHTML = (number1 - number2).toString();
                break;
            case '+' :
                input.innerHTML = (number1 + number2).toString();
                break;
            case '/' :
                input.innerHTML = (number1 / number2).toString();
                break;
            default :
                alert('erreur dans le calcul');
        }
    });
}

calcul();

buttonPoint.addEventListener('click', function () {
    let dataPoint = buttonPoint.innerHTML;
    input.innerHTML += dataPoint;
});