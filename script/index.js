const number = document.getElementById('number');
const button = document.getElementById('button');

function btn () {

    let random = () => {
        let randomNumber = Math.ceil(Math.random() * 13);
        if (number.innerText && number.innerText == randomNumber) {
            random();
        } else {
            number.innerText = randomNumber;
        }
    }
    
    let interval = setInterval(random, 127);
    let stop = () => clearInterval(interval);
    setTimeout(stop, 5000);
}

button.addEventListener('click', btn);