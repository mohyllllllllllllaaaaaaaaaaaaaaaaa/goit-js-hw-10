import"./assets/styles-CuKnEVkm.js";import{f as u,i as c}from"./assets/vendor-A92OCY9B.js";const t={startBtn:document.querySelector("[data-start]"),dateTimePicker:document.querySelector("#datetime-picker"),timer:document.querySelector(".timer"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let d=null,s=null;function l(e){console.log(e),e[0]<new Date?(c.error({title:"Alarm",message:"Please choose a date in the future",position:"topRight",color:"red"}),t.startBtn.disabled=!0):(d=e[0],t.startBtn.disabled=!1)}const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:l};u(t.dateTimePicker,m);function f(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),minutes:Math.floor(e%864e5%36e5/6e4),seconds:Math.floor(e%864e5%36e5%6e4/1e3)}}function o(e){return String(e).padStart(2,"0")}function i({days:e,hours:n,minutes:r,seconds:a}){t.days.textContent=o(e),t.hours.textContent=o(n),t.minutes.textContent=o(r),t.seconds.textContent=o(a)}t.startBtn.addEventListener("click",()=>{t.startBtn.disabled=!0,t.dateTimePicker.disabled=!0,s=setInterval(()=>{const n=d-new Date;if(n<=0){clearInterval(s),i({days:0,hours:0,minutes:0,seconds:0}),t.dateTimePicker.disabled=!1;return}i(f(n))},1e3)});
//# sourceMappingURL=1-timer.js.map
