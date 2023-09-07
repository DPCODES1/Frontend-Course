
function openConfigOverlay(event) {
    configOverlay.style.display = 'block';
    backDrop.style.display = 'block';
    editedPlayer = +event.target.dataset.playerid
}

function cancelConfigOverlay() {
    configOverlay.style.display = 'none'
    backDrop.style.display = 'none'
}

function savePlayerConfig(event) {
   event.preventDefault()
   let playerName = event.target[0].value.trim()
   if(playerName.length == 0) {
    alert("Please input a proper name without an empty string")
    return
   }
   const updatedPlayerDataElement = document.querySelector(`#player-${editedPlayer}-data h3`)
   updatedPlayerDataElement.textContent = playerName
   playerData[editedPlayer - 1].name = playerName
   event.target[0].value = null
   console.log(playerData)
//    const formData = new FormData(event.target)
//    for(const [key,val] of formData) {
//         console.log(key,val)
//    }
//    const data = formData.get('username').trim()
//    console.log(data)
   cancelConfigOverlay()
}