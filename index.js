const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

toggle.addEventListener("change", overflowDisable);

function overflowDisable() {
  if (toggle.checked) {
    body.classList.add("nav-open");
  } else {
    body.classList.remove("nav-open");
  }
}

// const toggle = document.getElementById("toggle");
// const body = document.querySelector("body");

// toggle.addEventListener("change", function () {
//   if (this.checked) {
//     body.classList.add("nav-open");
//   } else {
//     body.classList.remove("nav-open");
//   }
// });

// fetch(
//   "https://newsapi.org/v2/everything?" +
//     "q=linux&" +
//     "from=2023-03-31&" +
//     "sortBy=popularity&" +
//     "apiKey=7181cc8ec0f04253bf628ce61f1b5ab1"
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
