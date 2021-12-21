const showClock = () => {
    let date = new Date();
    let hr = HourFormat(date.getHours());
    let min = HourFormat(date.getMinutes());
    let sec = HourFormat(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hr}:${min}:${sec}`;

    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let daysWeek = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let dateText = `${daysWeek},${day},${month}`;
    document.getElementById("date").innerHTML = dateText;

    document.getElementById("container").classList.toggle("animate");
}

const HourFormat = (hour) => {
    if (hour < 10)
        hour = "0" + hora;
    return hour;
}

setInterval(showClock, 1000);