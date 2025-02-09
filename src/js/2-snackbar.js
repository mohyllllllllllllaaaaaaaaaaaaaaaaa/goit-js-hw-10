
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";//колір алертів не змінюю бо сторінка бібліотеки не є безпечною

const refs = {
    form: document.querySelector(".form"),
    delayInput: document.querySelector('input[name="delay"]'),
    radioButton: document.querySelector('input[name="state"]'),
    buttonSubmit: document.querySelector('button[type="submit"]')  
};

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = parseInt(refs.delayInput.value, 10);
    const selectedState = document.querySelector('input[name="state"]:checked'); 

    if (!selectedState) {
        iziToast.error({
            title: "Error",
            message: "Please select a state!",
            position: "topRight"
        });
        return;
    }

    const stateValue = selectedState.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateValue === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
    .then((delay) => {
        iziToast.success({
            title: "Success",
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: "topRight"
        });
    })
    .catch((delay) => {
        iziToast.error({
            title: "Error",
            message: `❌ Rejected promise in ${delay}ms`,
            position: "bottomRight"
        });
    });
});





