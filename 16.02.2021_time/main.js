let countdown = document.getElementById(`timer`);
let alldays = [];
let businessdays = [];
let countdowntimer;
let userDate = document.getElementById("endDate").value;

function showDate() {
    let text = document.querySelector("p");
    let one_day = 1000 * 60 * 60 * 24;
    let todayDate = new Date();
    let userDate = document.getElementById("endDate").value; //yyyy-mm-dd
    let userEvent = document.getElementById("yourEvent").value;

    let userTime = document.getElementById("startTime").value;

    diff = Math.ceil((Date.parse(userDate) - Date.parse(todayDate)) / one_day);

    workingdays = Math.round((diff / 7) * 5);

    if (userDate, userEvent, userTime == 0) {
        text.innerText = "Please enter your time, date and name first";
    } else {
        text.innerText = ` There are  ${diff} days and ${workingdays} workdays until ${userEvent}`;
    }

    timer(userDate, userEvent);
};

const timer = (userDate, userEvent) => {

    console.log(userEvent);
    console.log(userDate);

    if (countdowntimer) {
        clearInterval(countdowntimer);
    }

    countdowntimer = setInterval(function () {
        let now = new Date();
        let distance = userDate.getTime() - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / (1000));

        countdown.TextContent = `Countdown from today to ${userEvent}: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    }, 1000);

};


function showTime() {
    let today = new Date().toISOString().slice(0, 10) //yyyy-mm-dd
    var d = new Date();
    document.getElementById("clock").innerHTML = today + ` and ` + d.toLocaleTimeString();
}
setInterval(showTime, 1000);


