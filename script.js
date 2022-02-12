const x = document.querySelector(".but");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const display1 = document.getElementById("first");
const display2 = document.getElementById("second");
const inM = document.getElementById("min");
const inS = document.getElementById("sec");
const body = document.getElementsByTagName("body")[0];

stop.classList.add("disable");

let timer;

x.addEventListener("click", () => {
  body.style.backgroundImage =
    "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
  let m = document.getElementById("min").value;
  let s = document.getElementById("sec").value;
  if (s === "") {
    s = 0;
  }
  if (m === "") {
    m = 0;
  }
  inM.disabled = true;
  inS.disabled = true;
  stop.classList.remove("disable");
  x.classList.add("disable");
  seconds = parseInt(m * 60) + parseInt(s);
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  let lm = "";
  if (min < 10) {
    lm = 0;
  }
  let ls = "";
  if (sec < 10) {
    ls = 0;
  }
  display1.innerHTML = `${lm}${min}`;
  display2.innerHTML = `${ls}${sec}`;
  if (seconds > 0) {
    timer = setInterval(() => {
      seconds--;
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      let lm = "";
      if (min < 10) {
        lm = 0;
      }
      let ls = "";
      if (sec < 10) {
        ls = 0;
      }
      display1.innerHTML = `${lm}${min}`;
      display2.innerHTML = `${ls}${sec}`;
      if (seconds <= 0) {
        clearInterval(timer);
        inM.disabled = false;
        inS.disabled = false;
        x.disabled = false;
        body.style.backgroundColor = "aqua";
        body.style.backgroundImage = "linear-gradient(#667db6, #0082c8)";
        stop.classList.add("disable");
        x.classList.remove("disable");
      }
    }, 1000);
  } else {
    inM.disabled = false;
    inS.disabled = false;
    x.disabled = false;
    body.style.backgroundImage = "linear-gradient(#667db6, #0082c8)";
    stop.classList.add("disable");
  }
});

stop.addEventListener("click", (e) => {
  clearInterval(timer);
  inM.disabled = false;
  inS.disabled = false;
  x.disabled = false;
  body.style.backgroundColor = "aqua";
  body.style.backgroundImage = "linear-gradient(#667db6, #0082c8)";
  stop.classList.add("disable");
  x.classList.remove("disable");
});

reset.addEventListener("click", (e) => {
  if (timer) {
    clearInterval(timer);
  }
  inM.disabled = false;
  inS.disabled = false;
  inM.value = "";
  inS.value = "";
  x.disabled = false;
  body.style.backgroundColor = "aqua";
  body.style.backgroundImage = "linear-gradient(#667db6, #0082c8)";
  stop.classList.add("disable");
  x.classList.remove("disable");
  display1.innerHTML = "";
  display2.innerHTML = "";
});
