const span = document.querySelector('span')

const formInput = document.querySelector('form input')

function changer() {
    let count = formInput.value.length
    let spanLength = formInput.maxLength - count
    span.textContent = spanLength
    if(spanLength <=10) {
        formInput.style.backgroundColor = 'red'
    } else {
        formInput.style.backgroundColor = 'white'
    }
}


formInput.addEventListener('input',changer)