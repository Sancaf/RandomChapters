const number = document.getElementById('number');
const button = document.getElementById('button');

let random = () => {
    let randomNumber = Math.ceil(Math.random() * 13);
    number.innerText = randomNumber;
}
let suspense = () => {
    let interval = setInterval(random, 113);
    interval;
    setTimeout(clearInterval(interval), 3000);
}

button.addEventListener('click', suspense);