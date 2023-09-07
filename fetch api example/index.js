const btn = document.querySelector('button')
const ul = document.querySelector('ul')
const nameInput = document.getElementById('nameInput')

const form = document.getElementById('formData')
const getNames = document.getElementById('getName')

const nameList = document.getElementById('nameList')

const fetchData = async ()=> {
    ul.innerHTML = ''
    ul.innerHTML ='loading..'
    const data = await fetch('https://swapi.dev/api/films')
    const responseData =await data.json()
    console.log(responseData.results)
    ul.innerHTML = ''
    for(const data of responseData.results) {
        const li = document.createElement('li')
        li.innerHTML = `<h1>${data.title}</h1> <p>${data.opening_crawl}</p>`
        ul.append(li)
    }
}


const postData = async(event)=> {
    event.preventDefault()
    const data = await fetch('https://example-97078-default-rtdb.asia-southeast1.firebasedatabase.app/names.json',{
        method:'POST',
        body: JSON.stringify(nameInput.value),
        headers: {
            'Content-type':'application/json'
        }
    })
    if(data.ok) {
        fetchNames()
    }
}

const fetchNames = async() => {
    nameList.innerHTML = ''
    const data = await fetch('https://example-97078-default-rtdb.asia-southeast1.firebasedatabase.app/names.json')
    const responseData = await data.json()
    for(const nameData in responseData) {
       const li = document.createElement('li')
       li.textContent = responseData[nameData]
       nameList.append(li)
    }
}
btn.addEventListener('click',fetchData)
form.addEventListener('submit',postData)

getNames.addEventListener('click',fetchNames)