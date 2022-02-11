const x = document.querySelector(".but");
const count = document.getElementById("timer");
const inM = document.getElementById("min");
const inS = document.getElementById("sec");

x.addEventListener("click", () => {
  const m = document.getElementById("min").value;
  const s = document.getElementById("sec").value;
  inM.disabled = true;
  inS.disabled = true;
  x.disabled = true;
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
  count.innerHTML = `${lm}${min}:${ls}${sec}`;
  const timer = setInterval(() => {
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
    count.innerHTML = `${lm}${min}:${ls}${sec}`;
    if (seconds === 0) {
      clearInterval(timer);
      inM.disabled = false;
      inS.disabled = false;
      x.disabled = false;
    }
  }, 1000);
});

// const time = () => {
//   seconds--;
//   console.log(seconds);
//   const min = Math.floor(seconds / 60);
//   const sec = seconds % 60;
//   let lm = "";
//   if (min < 10) {
//     lm = 0;
//   }
//   let ls = "";
//   if (sec < 10) {
//     ls = 0;
//   }
//   count.innerHTML = `${min}:${sec}`;
//   if (seconds === 0) {
//     clearInterval(timer);
//   }
// };

// function time(){
//   seconds = seconds - 1;
//   console.log(seconds);
//   const min =  Math.floor(seconds/60);
//   const sec = seconds%60;
//   if(seconds===0){
//     clearInterval(timer);
//   }
// }

// const initialTime = 1;
// let seconds = initialTime*60;
// const min = Math.floor(seconds/60);
// const sec = seconds%60;

// const timer = setInterval(time, 1000);