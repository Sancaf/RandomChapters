const span = document.getElementById('number')
const button = document.getElementById('button')
const ana = document.getElementById('anagrams')
const random = document.getElementById('random')
const randomh1 = document.getElementById('randomh1')
const randomch = document.getElementById('randomch')

ana.addEventListener('click', () => {
	random.style.display = 'none'
	randomh1.style.display= 'none'
})

randomch.addEventListener('click', () => {
	random.style.display = 'block'
	randomh1.style.display= 'flex'
})


const navSlide = () => {
	const nav = document.querySelector('.nav')
	const burguer = document.querySelector('.burguer')
	const links = document.querySelectorAll('li')

	burguer.addEventListener('click', () => {
		nav.classList.toggle('nav-active')
		burguer.classList.toggle('toggle')

		links.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = ''
			} else {
				link.style.animation = `fade 0.5s ease forwards ${index/7 + 0.3}s`
			}
		})

	})

}

navSlide()

function btn() {
	button.style.color = 'rgb(' + 255 + ',' + 235 + ',' + 205 + ')';
	button.style.borderColor = 'rgb(' + 255 + ',' + 235 + ',' + 205 + ')';
	button.style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';

	let random = () => {
		let randomNumber = Math.ceil(Math.random() * 13)
		if (span.innerText && span.innerText == randomNumber) {
			random()
		} else if (randomNumber <= 9) {
			span.innerText = '0' + randomNumber
		} else {
			span.innerText = '\u00A0' + randomNumber
		}
	}

	let interval = setInterval(random, 197)
	let stop = () => {
		clearInterval(interval)
	}
	setTimeout(stop, 5000)
}

button.addEventListener('click', btn)

const logoteca = []

let anagram = (str, compar) => {
	let arr = str.replace(/\s+/g, '').split('')
	let arrc = compar.split('')
	let count = 0

	arr.forEach(char => {
		if(arrc.includes(char) && count === 0){
			console.log("anagrma")
		}else {
			console.log('no es anagrama')
		}
	})

}

anagram("hola mundo cruel y bello", "hola mundo cruel y bello")


//logoteca.forEach(words => words.forEach(word => {
//	word.split('')
//}))