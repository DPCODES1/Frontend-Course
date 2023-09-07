const loaded = false
const spinner = document.getElementsByClassName('loader')[0]
const btn = document.getElementById('data')
if (loaded === false) {
    spinner.style.display = 'block'
}

async function fetcher1() {
    const response = await fetch('https://swapi.dev/api/films')
    console.log(response)
    if (response.ok) {
        spinner.style.display = 'none'
    }
}

btn.addEventListener('click',fetcher1)
