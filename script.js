let clockDisplay = document.getElementById("clockDisplay")
let dateDisplay = document.getElementById("dateDisplay")

function setTime() {
  let myTime = new Date()

  let time = myTime.toLocaleTimeString()
  let date = myTime.toDateString()
  clockDisplay.innerText = time
  dateDisplay.innerText = date
}

function runTime() {
  setInterval(() => {
    setTime()
  }, 1000)
}

runTime()
