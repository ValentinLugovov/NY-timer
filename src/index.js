const newYear = new Date("Dec 31, 2022 12:00:00").getTime();
const timer = setInterval(function () {
  let now = new Date().getTime();
  let aim = newYear - now;

  if (aim >= 0) {
    let day = Math.floor(aim / (1000 * 60 * 60 * 24));
    let hour = Math.floor((aim % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((aim % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((aim % (1000 * 60)) / 1000);

    document.getElementById("timer-day").innerHTML = day;

    document.getElementById("timer-hour").innerHTML = ("0" + hour).slice(-2);

    document.getElementById("timer-min").innerHTML = ("0" + min).slice(-2);

    document.getElementById("timer-sec").innerHTML = ("0" + sec).slice(-2);
  } else {
    document.getElementById("timer-day").innerHTML = "Happy";
    document.getElementById("timer-hour").innerHTML = "New";
    document.getElementById("timer-min").innerHTML = "Year!";
    document.querySelector(".word").className = "none";
  }
}, 1000);


