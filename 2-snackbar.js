import"./assets/styles-CuKnEVkm.js";import{i as o}from"./assets/vendor-A92OCY9B.js";const r={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),radioButton:document.querySelector('input[name="state"]'),buttonSubmit:document.querySelector('button[type="submit"]')};r.form.addEventListener("submit",i=>{i.preventDefault();const t=parseInt(r.delayInput.value,10),s=document.querySelector('input[name="state"]:checked');if(!s){o.error({title:"Error",message:"Please select a state!",position:"bottomRight"});return}const n=s.value;new Promise((e,u)=>{setTimeout(()=>{n==="fulfilled"?e(t):u(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"bottomRight"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"bottomRight"})})});
//# sourceMappingURL=2-snackbar.js.map
