import Notiflix from 'notiflix';

const form = document.querySelector(".form");
let callPromise = 1;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget
  
  let delayTime = Number(delay.value);

  function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

  setTimeout(() => {
  let timerId = setInterval(() => {

    createPromise(callPromise, delayTime);

    Number(amount.value);
    let stepValue = Number(step.value);
    delayTime += stepValue;

    if (callPromise === Number(amount.value)) {
      clearInterval(timerId);
      callPromise = 0;
    }
    callPromise += 1;

  }, Number(step.value));
  },Number(delay.value));
}