// const time_id = document.getElementById("")

// const current_time = new Date().toLocaleDateString()
// time_id.textContent = current_time

function updateTime() {
  const timeElement = document.getElementById("time-li")
  const now = new Date()
  const formattedTime = now.toLocaleTimeString() // Get time in HH:MM:SS format
  timeElement.textContent = formattedTime
}

// Call updateTime immediately and then every second
setInterval(updateTime, 1000)
updateTime()
