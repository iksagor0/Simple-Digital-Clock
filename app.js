function clock() {
    let date = new Date()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timeFormat = "AM";

    if (hour > 12) {
        hour = hour - 12;
        timeFormat = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    const finalTime = `${hour}:${minute}:${second}`;

    document.getElementById("time").innerHTML = finalTime;
    document.querySelector("small").innerText = timeFormat;

    
   
    setInterval(clock, 1000);
}
clock()