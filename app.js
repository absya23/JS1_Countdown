// confetti
const confettiStart = () => {
  confetti.start();
};

const confettiStop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 17000);
};

// count

let deadlineDate = document.querySelector(".dateDeadline");
let deadlineTime = document.querySelector(".timeDeadline");
let submitBtn = document.querySelector("#submit");
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let countMusicElement = document.querySelector("audio.count");
let bDayMusicElement = document.querySelector("audio.bday");

submitBtn.addEventListener("click", function () {
  countMusicElement.pause();
  bDayMusicElement.pause();
  countMusicElement.currentTime = 0;
  bDayMusicElement.currentTime = 0;
  // console.log(deadline.valueAsDate);
  setInterval(function () {
    var today = new Date();
    var deadline = deadlineDate.valueAsDate.getTime();
    var todayTime = today.getTime();
    var time =
      deadline + deadlineTime.valueAsNumber - todayTime - 7 * 1000 * 60 * 60;
    if (time <= 0) {
      days.innerHTML = "00";
      hours.innerHTML = "00";
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
    } else {
      var temp = 0;
      var d = Math.floor(time / (1000 * 60 * 60 * 24));
      temp = time % (1000 * 60 * 60 * 24);
      var h = Math.floor(temp / (1000 * 60 * 60));
      temp %= 1000 * 60 * 60;
      var m = Math.floor(temp / (1000 * 60));
      temp %= 1000 * 60;
      var s = Math.floor(temp / 1000);
      if (d < 10) days.innerHTML = "0" + d;
      else days.innerHTML = d;
      if (h < 10) hours.innerHTML = "0" + h;
      else hours.innerHTML = h;
      if (m < 10) minutes.innerHTML = "0" + m;
      else minutes.innerHTML = m;
      if (s < 10) seconds.innerHTML = "0" + s;
      else seconds.innerHTML = s;
      if (d == 0 && h == 0 && m == 0) {
        if (s == 10) countMusicElement.play();
        if (s == 0) {
          bDayMusicElement.play();
          confettiStart();
          confettiStop();
        }
      }
    }
    // console.log(Math.floor(bDayMusicElement.currentTime));
    if (Math.floor(bDayMusicElement.currentTime) == 18) {
      bDayMusicElement.pause();
    }
  }, 1000);
});
