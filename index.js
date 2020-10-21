const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const COLOR_CHANGE_DELAY = 1000;

const refs = {
  pageEl: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;

refs.startBtn.addEventListener("click", changePageColor);
refs.stopBtn.addEventListener("click", stopChangingPageColor);

function changePageColor() {
  intervalId = setInterval(() => {
    refs.pageEl.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, COLOR_CHANGE_DELAY);

  refs.startBtn.setAttribute("disabled", true);
}

function stopChangingPageColor() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute("disabled");
}
