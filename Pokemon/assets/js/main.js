let container = document.getElementById("container");

for (let i = 1; i <= 151; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "container__div");

  let img = document.createElement("img");
  img.src = `./img/pokemon/${i}.png`;

  let desc = document.createElement("p");
  desc.textContent = `#${i}`;
  container.append(div);
  div.append(img, desc);

  img.setAttribute("class", `img${i}`);
}

let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

let stickers = document.querySelectorAll(".container__div");

let changeColor = function () {
  this.style.background = randomColor();
};

let notify = function () {
  alert(this.lastChild.textContent);
};

stickers.forEach((item) => {
  if (item instanceof HTMLElement) {
    item.addEventListener("click", changeColor, { once: true });
    item.addEventListener("click", notify, { once: true });
  }
});
