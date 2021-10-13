const About = document.querySelector(".about")
const pre_register = document.querySelector(".pre_register") 
const navButtons = document.querySelectorAll("button")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrbw8A_7ep-TUgjgZECnFQThPjhNaXrYvL0AHCwtHXUPdcmxHE/exec'
const form = document.getElementById("preRegister")


function buttons () {
    
    navButtons[0].addEventListener('click', () => {
        About.scrollIntoView({behavior: "smooth"})
})

navButtons[1].addEventListener('click', () => {
    pre_register.scrollIntoView({behavior: "smooth"})
})

}

buttons ()


form.addEventListener('submit', e => {
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        form.reset();
        })
    .catch(error => console.error('Error!', error.message))
})