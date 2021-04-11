const span = document.getElementById('number');
const button = document.getElementById('button');

function btn () {
    button.style.color = "blanchedalmond";
    button.style.borderColor = "blanchedalmond";
    button.style.backgroundColor = "black";

    let random = () => {

        let randomNumber = Math.ceil(Math.random() * 13);
        if (span.innerText && span.innerText == randomNumber) {
            random();
        } else if (randomNumber <= 9) {
            span.innerText = '0' + randomNumber;
        } else {
            span.innerText = '\u00A0' + randomNumber;
        }
    }
    
    let interval = setInterval(random, 147);
    let stop = () => {
        clearInterval(interval);
    }
    setTimeout(stop, 5000);
}

button.addEventListener('click', btn);