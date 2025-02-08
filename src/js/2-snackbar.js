
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const refs = {
    form: document.querySelector(".form"),
    delayInput: document.querySelector('input[name="delay"]'),
    radioButton: document.querySelector('input[ name="state"]'),
    buttonSabmit: document.querySelector('button[type="submit"]')  
};
//
//
refs.form.addEventListener('submit', (event) => {
event.preventDefault();
const delay = parseInt(delayInput.value, 10);
const selectedState = document.querySelector('input[ name="state"]: cheked');
if(!selectedState){
    iziToast.error({
    title: "Eror",
    message: "Please select a state!",
    position: "bottomRight"
});
return;
}  
});
const stateValue = selectedState.value;

new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(stateValue.value === "fulfilled"){
                resolve(delay);
            }else{reject(delay);}
        },delay);
    })
    .then((delay) => {
        iziToast.success({
            title: "Succes",
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: "bottomRight"
        });
    })
    .catch((delay) => {
        iziToast.error({
           title: "Error",
           message: `❌ Rejected promise in ${delay}ms`,
           position: "bottomRight"
        });
    })



