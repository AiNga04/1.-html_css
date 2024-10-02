let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

let btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  if (item instanceof HTMLElement) {
    item.addEventListener("click", function () {
      this.style.background = randomColor();
      this.style.color = randomColor();
    });
  }
});

let titles = document.querySelectorAll(".title");

let changeColor = function () {
  this.style.background = randomColor();
  this.style.color = randomColor();
};

for (let title of titles) {
  title.addEventListener("click", changeColor);
}
