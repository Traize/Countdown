const newYear = "1 Jan 2022";

daysEl = document.getElementById('days')
hoursEl = document.getElementById('hours')
minutesEl = document.getElementById('mins')
secondsEl = document.getElementById('sec')

function countdown(){
const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate) / 1000  
    
    let days = Math.floor(totalSeconds / 3600 / 24)
    
    let hours = Math.floor(totalSeconds / 3600) % 24

    let minutes = Math.floor(totalSeconds / 60) % 60
    
    let seconds = Math.floor(totalSeconds) % 60

    console.log(days, hours, minutes, seconds)

    days = days < 10 ? '0' + days : days
    minutes = minutes < 10 ? '0' + minutes : minutes
    hours = hours < 10 ? '0' + hours : hours
    seconds = seconds < 10 ? '0' + seconds : seconds
    
    daysEl.innerHTML = (days)
    hoursEl.innerHTML = (hours)
    minutesEl.innerHTML = (minutes)
    secondsEl.innerHTML = (seconds)
}

countdown();

setInterval(countdown, 1000)



