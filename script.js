let clockDisplay = document.getElementById("clockDisplay")
let dateDisplay = document.getElementById("dateDisplay")
let toglFormat = document.getElementById("t-togl")

let toggle = false

toglFormat.addEventListener("change", (e) => {
  if (toglFormat.checked) {
    toggle = true
  } else {
    toggle = false
  }
})

function setTime() {
  let myTime = new Date()

  if (toggle) {
    clockDisplay.innerText = myTime.toLocaleTimeString("en-US", {
      hour12: false,
    })
    dateDisplay.innerText = myTime.toDateString()
  } else {
    clockDisplay.innerText = myTime.toLocaleTimeString("en-US", {
      hour12: true,
    })
    dateDisplay.innerText = myTime.toDateString()
  }
}

function runTime() {
  setInterval(() => {
    setTime()
  }, 1000)
}

runTime()
