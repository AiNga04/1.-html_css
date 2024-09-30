let title = document.querySelector("#title");
let btn = document.querySelector("#btn");

let ramdomColor = () => {
  let r = Math.floor(Math.random(0, 1) * 256),
    g = Math.floor(Math.random(0, 1) * 256),
    b = Math.floor(Math.random(0, 1) * 256);
  title.parentElement.parentElement.style.background = `rgb(${r}, ${g}, ${b})`;
  title.textContent = `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener("click", ramdomColor);
