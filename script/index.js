const number = document.getElementById('number');
const button = document.getElementById('button');

function btn () {
    button.style.color = "blanchedalmond";
    button.style.borderColor = "blanchedalmond";
    button.style.backgroundColor = "black";

    let random = () => {

        let randomNumber = Math.ceil(Math.random() * 13);
        if (number.innerText && number.innerText == randomNumber) {
            random();
        } else if (randomNumber <= 9) {
            number.innerText = '0' + randomNumber;
        } else {
            number.innerText = randomNumber;
        }
    }
    
    let interval = setInterval(random, 127);
    let stop = () => {
        clearInterval(interval);
    }
    setTimeout(stop, 5000);
}

button.addEventListener('click', btn);