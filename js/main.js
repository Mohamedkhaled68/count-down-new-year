// function ShowTime() {
//     const d = new Date();
//     let day = d.getDay();
//     let hrs = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();


//     let dD = document.getElementById('days');
//     let hD = document.getElementById('hours');
//     let mD = document.getElementById('mins');
//     let sD = document.getElementById('seconds');

//     hrs = hrs < 10 ? '0' + hrs : hrs;
//     min = min < 10 ? '0' + min : min; 
//     sec = sec < 10 ? '0' + sec : sec; 

//     dD.innerHTML = day;
//     hD.innerHTML = hrs;
//     mD.innerHTML = min;
//     sD.innerHTML = sec;

// }

// setInterval(ShowTime,1000);

const theYearIneed = "1 jan 2024";
function countDown(){
    const newYearsdate = new Date(theYearIneed);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsdate - currentDate) / 1000);

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hrs = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let sec = Math.floor(totalSeconds) % 60;

    let dD = document.getElementById("days");
    let hD = document.getElementById("hours");
    let mD = document.getElementById("mins");
    let sD = document.getElementById("seconds");

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;

    dD.innerHTML = days;
    hD.innerHTML = hrs;
    mD.innerHTML = mins;
    sD.innerHTML = sec;


}

// countDown();

setInterval(countDown,1000)


