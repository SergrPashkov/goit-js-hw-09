
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


function addLeadingZero(value){
	return String(value).padStart(2, '0');
}

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	
	// Remaining days
	const days = addLeadingZero(Math.floor(ms / day));
	// Remaining hours
	const hours = addLeadingZero(Math.floor((ms % day) / hour));
	// Remaining minutes
	const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
	// Remaining seconds
	const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

	return { days, hours, minutes, seconds };
}

const date = new Date();
let dateClick = 0;
let deltaTime = 0;
const buttonClick = document.querySelector('BUTTON');

let timerDay = document.querySelector('[data-days]');
let timerHours = document.querySelector('[data-hours]');
let timerMinutes = document.querySelector('[data-minutes]');
let timerSeconds = document.querySelector('[data-seconds]');

function timerStart(deltaTime) {
	setInterval(() => {
		deltaTime -= 1000;
		
		const { days, hours, minutes, seconds } = convertMs(deltaTime)
		timerDay.textContent = days;
		timerHours.textContent = hours;
		timerMinutes.textContent = minutes;
		timerSeconds.textContent = seconds;
		
	}, 1000)
}

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	
	onClose(selectedDates) {
		dateClick = selectedDates[0];
		deltaTime = dateClick - date

		if (deltaTime < 0) {
		Notiflix.Notify.failure('Please choose a date in the future');
		} else {
			buttonClick.removeAttribute('disabled', '');
			};
	},
};

flatpickr("#datetime-picker", options).selectedDates[0];


buttonClick.addEventListener("click", () => timer());

function timer() {
	buttonClick.setAttribute('disabled', '');
	timerStart(deltaTime);
}
