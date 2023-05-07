let toggleInterval = null;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttonClick = document.querySelector('[data-start]');

function clickButtonStart() {
	toggleInterval = setInterval(changeBackground, 1000);
	buttonClick.setAttribute('disabled', '');
	buttonStop.removeAttribute('disabled', '');
};

buttonClick.addEventListener("click", () => clickButtonStart());
function changeBackground() {
	document.body.style.background = getRandomHexColor();
}

const buttonStop = document.querySelector('[data-stop]');
buttonStop.addEventListener("click", () => clickButtonStop());

function clickButtonStop() {
	clearInterval(toggleInterval);
	buttonClick.removeAttribute('disabled', '');
	buttonStop.setAttribute('disabled', '');
};





























// const buttonClick = document.querySelectorAll('button');

// buttonClick.forEach( function (item) {
// 	console.log(item);
// 	console.log(item.dataset.start);
// 	//if (item === button.dataset.start) {
// 	//	console.log(item);
//  // };
//   console.log('пошло дальше');
// })


// console.log(buttonClick);
// buttonClick.addEventListener("click", () => test1());

// function test1() { buttonClick.forEach( function (item){

// 	// const click = item.dataset.start;
// 	// click.addEventListener("click", () => console.dir(item));
// 	// if (item.dataset.start) { console.dir(item)}
// 	console.dir(item.dataset.start);
	
// 	// this.setAttribut.e('disabled', 'true')

// })}
