let btn = document.querySelector(".share-btn");
let block = document.querySelector(".block");
let container = document.querySelector(".container");

// btn.addEventListener("click", () => {
//   block.classList.add("active");
// });

// container.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (block.classList.contains("active")) {
//     block.classList.remove("active");
//     return false;
//   } else {
//     alert("nooo");
//   }
// });

btn.addEventListener("click", (e) => {
  e.preventDefault();
  block.classList.toggle("active");
  e.stopPropagation();
});

function hide() {
  if (block.classList.contains("active")) {
    block.classList.remove("active");
    return false;
  } else {
    return true;
  }
}

container.addEventListener("click", hide);
