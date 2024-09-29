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
