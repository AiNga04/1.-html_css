let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

btn1.onclick = () => {
  alert("Bạn vừa click vào Button 1");
};

let btn2_function = function () {
  alert("Bạn vừa click vào Button 2");
};

btn2.onclick = btn2_function;

let desc = document.querySelector(".desc");

let hover1 = () => {
  desc.parentElement.style.background = "violet";
};

let hover2 = () => {
  desc.parentElement.style.background = "cyan";
};

function setUp() {
  desc.onmouseover = hover1;
  desc.onmouseout = hover2;
}

window.onload = setUp;
