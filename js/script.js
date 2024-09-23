const time_id = document.getElementById("time-li")

const current_time = new Date().toLocaleDateString()
time_id.textContent = current_time
