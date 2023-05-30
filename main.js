// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
// get & convert
// let getValue = () => {
//   //   get value input
//   //   let inputDay = document.querySelector('[aria-label="day"]').value;
//   //   let inputMonth = document.querySelector('[aria-label="month"]').value;
//   let inputYear = document.querySelector('[aria-label="year"]').value;
//   // init date
//   let date = new Date();
//   // convert to date now
// w  let resultYear = inputYear - date.getFullYear();
//   //   let resultMonth = 1 + inputMonth - date.getMonth();
//   //   let resultDay = inputDay - date.getDay();
//   // get value result
//   let resYear = document.querySelector('[aria-label="resultYear"]');
//   resYear.textContent = resultYear;
// };

//   get value input

// get btn
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   // input value
//   let inputDay = document.querySelector('[aria-label="day"]').value;
//   let inputMonth = document.querySelector('[aria-label="month"]').value;
//   let inputYear = document.querySelector('[aria-label="year"]').value;

//   // init date
//   let date = new Date();
//   // convert to date now
//   let resultYear = inputYear - date.getFullYear();
//   let resultMonth = 1 + inputMonth - date.getMonth();
//   let resultDay = inputDay - date.getDate();
//   // get value result
//   let resYear = document.querySelector('[aria-label="resultYear"]');
//   let resMonth = document.querySelector('[aria-label="resultMonth"]');
//   let resDay = document.querySelector('[aria-label="resultDay"]');
//   resYear.innerHTML = resultYear;
//   resMonth.innerHTML = resultMonth;
//   resDay.innerHTML = resultDay;
// });

// // let input = 2000;
// // let date = new Date();
// // let day = date.getDate();
// // let month = date.getMonth() + 1;
// // let year = date.getFullYear();
// // let hasil = year - input;
// // let result = `${day}-${month}-${year}`;
// // console.log(result);
// // console.log(hasil);

// form validation
// get input value
let inputDay = document.querySelector('[aria-label="day"]');
let inputMonth = document.querySelector('[aria-label="month"]');
let inputYear = document.querySelector('[aria-label="year"]');
const form = document.getElementById("form");
const errorElement = document.querySelector(".err");
form.addEventListener("submit", (e) => {
  let messages = [];
  if (
    inputDay.value === "" ||
    // inputDay.value == null ||
    inputDay.value >= 32 ||
    inputDay.length >= 3
  ) {
    messages.push("Day is required & must be valid");
  }
  if (
    inputMonth.value === "" ||
    // inputMonth.value == null ||
    inputMonth.value >= 12 ||
    inputMonth.length >= 3
  ) {
    messages.push("Month is required & must be valid");
  }
  if (
    inputYear.value === "" ||
    // inputYear.value == null ||
    inputYear.value >= 2024 ||
    inputYear.length >= 5
  ) {
    messages.push("Year is required & must be valid");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.textContent = messages.join(", ");
  }
});
