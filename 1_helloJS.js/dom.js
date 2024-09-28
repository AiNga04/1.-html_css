document.addEventListener("DOMContentLoaded", function () {
  console.log("getElementById");
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
});
