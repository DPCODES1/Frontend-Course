// Calculator
const calcSection = document.getElementById('calculator')

const calcInput = document.getElementById('user-number')

const calcbtn = document.getElementById('sum-button')

const calcout = document.getElementById('calculated-sum')

let value = 0

const cal = (event) => {
    for (let i = 0; i <= calcInput.value; i++) {
        value = value + i
    }
    calcout.textContent = value
    calcout.style.display = 'block'
    value = 0

}

calcbtn.addEventListener('click', cal)

//highlight
const anchorTagOfHighlights = document.querySelectorAll('#highlight-links a')
const highlightDrivenButton = document.querySelector('#highlight-links button')

highlightDrivenButton.addEventListener('click', function (eve) {
    for (const anchor of anchorTagOfHighlights) {
        anchor.classList.toggle('highlight')
    }
})

//userdata

const userDatabtn = document.querySelector('#user-data button')
const userDataResult = document.querySelector('#output-user-data')
const data = {
    userName: 'Deepak',
    age: 22,
    occupation: 'Developer'
}

userDatabtn.addEventListener('click', () => {
    if (userDataResult.innerHTML) {
        return
    }
    for (const key in data) {
        const li = document.createElement('li')
        li.textContent = key.toUpperCase() + " : " + data[key]
        userDataResult.append(li)
    }
})

//Rool the dice

const targetRollNumber = document.getElementById('user-target-number')
const RollDIcebtn = document.querySelector('#statistics button')
const diceul = document.getElementById('dice-rolls')
const outputNumberOFRolls = document.getElementById('output-total-rolls')
const outputTargetNumber = document.getElementById('output-target-number')
function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}


function deriveNumberOfRolls() {
    let numberOfRolls = 0;
    let rolled = false;
    const enteredNumber = targetRollNumber.value;
    diceul.innerHTML = '';
    while (!rolled) {
        const rolledNumber = rollDice()
        numberOfRolls++
        const li = document.createElement('li')
        li.textContent = `roll ${numberOfRolls} : ${rolledNumber}`
        diceul.append(li)
        console.log(rolledNumber)
        if (enteredNumber == rolledNumber) {
            rolled = true
        }
    }
    outputNumberOFRolls.textContent = numberOfRolls
    outputTargetNumber.textContent = enteredNumber
}


RollDIcebtn.addEventListener('click', deriveNumberOfRolls)

