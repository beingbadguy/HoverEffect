const main = document.querySelector("#main");

const input = document.querySelector("#input");

const btn = document.querySelector("#btn");

console.log(main, input, btn);

btn.addEventListener("click", () => {
  main.innerHTML = "";
  let value = input.value;
  if (value == "") {
    main.innerHTML = "";
    alert("Please enter a valid number");
  }
  if (value <= 3000) {
    for (let i = 0; i < value; i++) {
      let newElement = document.createElement("div");
      newElement.style.backgroundColor = `randomColor()`;
      newElement.setAttribute("class", "active");
      main.appendChild(newElement);
    }
  } else {
    alert("Please ente a value less than 3000");
  }

  const box = document.querySelectorAll(".active");
  console.log(box);
  box.forEach((item) => {
    item.addEventListener("mouseover", () => {
      function randomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
      }
      let a = randomColor();
      console.log(a);
      item.style.backgroundColor = `${a}`;
    });
  });

  box.forEach((item) => {
    item.addEventListener("mouseout", () => {
      setInterval(() => {
        item.style.backgroundColor = "rgb(67, 63, 63)";
      }, 1000);
    });
  });
});

//   console.log(value);
