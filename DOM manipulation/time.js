"use strict";
function My_Clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";
    if (hours == 0) {
        hours = 12;
    } else if (hours >= 12) {
        hours = hours - 12;
        period = "PM";
    }
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
    setTimeout(My_Clock, 1000);
}
My_Clock();