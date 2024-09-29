document.addEventListener("DOMContentLoaded", function () {
  console.log("getElementsByClassName");
  let checkbox = document.getElementsByClassName("checkbox");
  console.log(checkbox);
  checkbox.innerHTML = "click me!";
  console.log(checkbox.innerHTML);

  console.log("getElementsByTagName");
  let li_item = document.getElementsByTagName("li");
  console.log(li_item);

  li_item[0].innerHTML = "100";
  console.log(li_item[0]);

  console.log(document.getElementsByTagName("h1"));
  document.getElementsByTagName("h1").innerHTML = "click me!";

  let titleId = document.getElementById("heading_title");
  console.log(titleId.innerHTML);
  titleId.innerHTML = "TIÊU ĐỀ!";
  console.log(titleId.innerHTML);

  let item_1 = document.querySelector("#noi_dung_1");
  console.log(item_1);
  item_1.innerHTML = "Hello Nga";
  console.log(item_1.innerHTML);

  let link = document.querySelector("ul a");
  console.log(link);

  let checked_1 = document.querySelector(".checkbox");
  checked_1.checked = true;

  console.log(link.getAttribute("href"));
  link.setAttribute("target", "_blank");
  console.log(link.getAttribute("target"));

  let links = document.querySelectorAll("ul a");
  console.log(links);

  links.forEach((item) => {
    item.setAttribute("class", "link");
  });

  links.forEach((item) => {
    console.log(item.getAttribute("class"));
  });

  let tagH1 = document.querySelector("#heading_title");
  console.log(tagH1);

  console.log(tagH1.getAttribute("style"));
  tagH1.setAttribute("style", "color: red");

  console.log(tagH1.hasAttribute("id"));
  tagH1.removeAttribute("style");
  console.log(tagH1.hasAttribute("style"));

  let desc = document.querySelector(".desc__content");
  console.log(desc);

  console.log(desc.innerHTML);
  console.log(desc.textContent);
  console.log(desc.innerText);

  desc.innerText = `Ái Nga`;
  desc.textContent = `<a href="hello">Nga</a>`;
  desc.innerHTML = `<a href="hello">Nga</a>`;

  let styleH1 = document.querySelector("h1");
  console.log(styleH1);
  styleH1.style.backgroundColor = "cyan";
  styleH1.style.fontSize = "40px";
  styleH1.style.color = "red";

  Object.assign(styleH1.style, {
    backgroundColor: "#ffffff",
    color: "blue",
  });

  let title = document.querySelector(".title");
  console.log(title);

  console.log(title.style.fontSize);
  console.log(window.getComputedStyle(title).color);

  title.classList.add("new_title");
  title.classList.replace("new_title", "title_2");
  title.classList.remove("new_title", "title_2");
  console.log(title.classList.contains("title"));
  console.log(title.classList.contains("title_2"));
  title.classList.toggle("new_title"); //add
  console.log(title.classList.contains("new_title"));
  title.classList.toggle("new_title"); //remove
  console.log(title.classList.contains("new_title"));

  let elm = document.getElementById("noi_dung_2");
  console.log(elm);

  console.log(elm.parentElement);
  console.log(elm.nextElementSibling);
  console.log(elm.previousElementSibling);
  console.log(elm.parentElement.children);

  let newImg = document.createElement("img");
  newImg.setAttribute(
    "src",
    "https://img.vn/uploads/noidung/images/imgh-renderacc-aeon-2.jpeg"
  );

  // newImg.src =
  //   "https://img.vn/uploads/noidung/images/imgh-renderacc-aeon-2.jpeg";

  console.log(checkbox);
  document.body.append(newImg);
  newImg.style.width = "100vw";

  let newDesc = document.createElement("p");
  newDesc.textContent = "Trên là Img!";

  document.body.append(newDesc, "Hello");

  console.log(desc);
  let newdesc_1 = document.createElement("p");
  newdesc_1.textContent = "Hello world";

  desc.appendChild(newdesc_1);
  newdesc_1.style.color = "red";

  Object.assign(newdesc_1.style, {
    backgroundColor: "cyan",
    fontSize: "20px",
    color: "violet",
  });

  console.log(desc.appendChild(newdesc_1));
  console.log(desc.append(newdesc_1));

  let btn = document.createElement("button");
  btn.textContent = "Click me!";

  desc.append(btn);

  let container = document.querySelector(".container");
  console.log(container);

  btn.addEventListener("click", function () {
    alert("Bạn vừa click vào tôi!");
    for (let i = 0; i < 100; i++) {
      let btn_1 = document.createElement("button");
      btn_1.textContent = `Button ${i + 1}`;
      container.appendChild(btn_1);

      if (i % 2) {
        btn_1.style.background = "cyan";
      }
    }
  });
});
