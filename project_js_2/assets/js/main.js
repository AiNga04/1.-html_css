let panels = document.querySelectorAll(".main__panel");

// panels.forEach((item) => {
//   item.addEventListener("mouseover", function () {
//     item.setAttribute("class", "main__panel active");
//   });

//   item.addEventListener("mouseout", function () {
//     item.setAttribute("class", "main__panel");
//   });
// });

panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

let removeActive = () => {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
};

// progress
let progress = document.querySelector("#progress");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let steps = document.querySelectorAll(".step");

let currentActive = 1;

prev.addEventListener("click", function () {
  changeActive(-1);
});

next.addEventListener("click", function () {
  changeActive(1);
});

let changeActive = (step) => {
  currentActive += step;

  update();
};

let update = () => {
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;

  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
};

//search
const search = document.querySelector(".search");
const btn = document.querySelector("#search_btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
