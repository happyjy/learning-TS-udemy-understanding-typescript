const userName = "Maximilian";

console.log(userName);

const button = document.querySelector("#button");
const button1 = document.querySelector("#button1");

console.log({ button, button1, button1Excl: button1! });
button &&
  button.addEventListener("click", function () {
    console.log("button");
  });
