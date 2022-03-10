

const btnSubmit = document.getElementById('btnSubmit');
const inputForm = document.getElementById('inputSubmit');
const error = document.getElementById('error');
const success = document.getElementById('success');



btnSubmit.addEventListener('click', e => {
    e.preventDefault()
    formulario()
    console.log(inputForm.value)
})



function validaEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}


function formulario() {
    let emailValido = validaEmail(inputForm.value)

    if (emailValido) {
        console.log('Es correcto')
        success.style.display = 'block'
        error.style.display = 'none'

    } else if (!emailValido) {
        console.log('No valido')
        error.style.display = 'block'
        success.style.display = 'none'
    }
}