const key = document.querySelector("#username");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

key.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.key === "*") {
    key.parentElement.parentElement.parentElement.style.background =
      randomColor();
  }
});

const submit = document.querySelector("#submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Form đã được gửi đi!");

  if (key.value.trim() === "") {
    console.error("Không thể thêm phần tử rỗng!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = key.value;
  const ul = document.querySelector(".list__ul");
  ul.append(li);

  key.value = "";
});

// event: input, change
key.addEventListener("input", function (e) {
  console.log(`Input: ${e.target.value}`);
});

key.addEventListener("change", function (e) {
  console.log(`Change: ${e.target.value}`);
});

//event: bubblibing
const box__grand = document.querySelector(".box__grand");
const box__parent = document.querySelector(".box__parent");
const box__child = document.querySelector(".box__child");

// box__grand.addEventListener("click", function () {
//   console.log("click box__grand");
// });

// box__parent.addEventListener("click", function () {
//   console.log("click box__parent");
// });

// box__child.addEventListener("click", function () {
//   console.log("click box__child");
// });

// stopPropagation;
// box__grand.addEventListener("click", function (e) {
//   console.log("click box__grand");
// });

// box__parent.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("click box__parent");
// });

// box__child.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("click box__child");
// });

// stopImmediatePropagation;
// box__grand.addEventListener("click", function (e) {
//   console.log("click box__grand");
// });

// box__parent.addEventListener("click", function (e) {
//   e.stopImmediatePropagation();
//   console.log("click box__parent");
// });

// box__child.addEventListener("click", function (e) {
//   e.stopImmediatePropagation();
//   console.log("click box__child");
// });

//event: capturing
box__grand.addEventListener(
  "click",
  function (e) {
    console.log("click box__grand");
  },
  { capture: true }
);

box__parent.addEventListener(
  "click",
  function (e) {
    console.log("click box__parent");
  },
  { capture: true }
);

box__child.addEventListener(
  "click",
  function (e) {
    console.log("click box__child");
  },
  { capture: true }
);

// box__grand.addEventListener(
//   "click",
//   function (e) {
//     console.log("click box__grand");
//   },
//   { capture: true }
// );

// box__parent.addEventListener(
//   "click",
//   function (e) {
//     e.stopImmediatePropagation();
//     console.log("click box__parent");
//   },
//   { capture: true }
// );

// box__child.addEventListener(
//   "click",
//   function (e) {
//     e.stopImmediatePropagation();
//     console.log("click box__child");
//   },
//   { capture: true }
// );

const ul = document.querySelector(".list__ul");
ul.addEventListener("dblclick", (e) => {
  const li = e.target;
  if (li.tagName === "LI") {
    li.remove();
  }
});
