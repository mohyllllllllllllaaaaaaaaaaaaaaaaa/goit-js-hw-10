
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
startBtn: document.querySelector("[data-start]"),
datatimerPicker: document.querySelector("datetime-picker"),
timer: document.querySelector(".timer")
};
let userSelectedDate = null;
let timerInterval = null;



  function validedSelectedDate(selectedDates){
if(selectedDates < new Data()) {
    iziToast.error({
        title: "alarm",
        message: "Please choose a date in the future",
    });
    startBtn.disabled = true;
}else{
    userSelectedDate = selectedDates[0];
    startBtn.disabled = false;
}
  };
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
  flatpickr(dateTimePicker, options);

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
      document.querySelector("[data-days]").textContent = addLeadingZero(days);
      document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
      document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
      document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
  }

  startButton.addEventListener("click", () => {
      startButton.disabled = true;
      dateTimePicker.disabled = true;
      timerInterval = setInterval(() => {
          const now = new Date();
          const timeRemaining = userSelectedDate - now;
          if (timeRemaining <= 0) {
              clearInterval(timerInterval);
              updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
              dateTimePicker.disabled = false;
              return;
          }
          updateTimerDisplay(convertMs(timeRemaining));
      }, 1000);
  });

    