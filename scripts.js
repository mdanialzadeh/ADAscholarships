const About = document.querySelector(".about")
const pre_register = document.querySelector(".pre_register") 
const navButtons = document.querySelectorAll("button")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrbw8A_7ep-TUgjgZECnFQThPjhNaXrYvL0AHCwtHXUPdcmxHE/exec'
const form = document.getElementById("preRegister")
const form_results = document.querySelector(".email_result")


function buttons () {
    
    navButtons[0].addEventListener('click', () => {
        About.scrollIntoView({behavior: "smooth"})
})

navButtons[1].addEventListener('click', () => {
    pre_register.scrollIntoView({behavior: "smooth"})
})

}

buttons ()

function disableBtn() {
    submit_button.disabled = true;
}

function enableBtn() {
    submit_button.disabled = false;
}

function emailResult () {
    form_results.innerHTML = "Succes! thank you for Preregistering"
}

form.addEventListener('submit', e => {
    if(!e.detail || e.detail == 1){e.preventDefault()
  disableBtn();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        form.reset();
        emailResult();
        })
    .catch(error => enableBtn())
    }
})