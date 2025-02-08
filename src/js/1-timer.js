import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  startBtn: document.querySelector("[data-start]"),
  dateTimePicker: document.querySelector("#datetime-picker"),
  timer: document.querySelector(".timer"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

let userSelectedDate = null;
let timerInterval = null;


function validateSelectedDate(selectedDates) {
  if (selectedDates[0] < new Date()) {
    iziToast.error({
      title: "Alarm",
      message: "Please choose a date in the future",
      position: "bottomRight"
    });
    refs.startBtn.disabled = true;
  } else {
    userSelectedDate = selectedDates[0];
    refs.startBtn.disabled = false;
  }
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: validateSelectedDate,
};


flatpickr(refs.dateTimePicker, options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor(((ms % day) % hour) / minute),
    seconds: Math.floor((((ms % day) % hour) % minute) / second),
  };
}


function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

refs.startBtn.addEventListener("click", () => {
  refs.startBtn.disabled = true;
  refs.dateTimePicker.disabled = true;

  timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = userSelectedDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      refs.dateTimePicker.disabled = false;
      return;
    }

    updateTimerDisplay(convertMs(timeRemaining));
  }, 1000);
});


    