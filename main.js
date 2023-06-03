// Import Libray JustValidate for form validation
import JustValidate from "just-validate";
const validator = new JustValidate(
  document.querySelector("#form")
  // , {
  //   validateBeforeSubmitting: true,
  // }
);
// Form validation
validator
  // for day
  .addField(
    document.querySelector('[aria-label="day"]'),
    [
      {
        rule: "required",
        errorMessage: "This fied is required",
      },
      {
        rule: "number",
        errorMessage: "Must be a valid day",
      },
      {
        rule: "minNumber",
        value: 1,
        errorMessage: "Must be a valid day",
      },
      {
        rule: "maxNumber",
        value: 31,
        errorMessage: "Must be a valid day",
      },
      {
        rule: "minLength",
        value: 1,
        errorMessage: "Must be a valid day",
      },
      {
        rule: "maxLength",
        value: 2,
        errorMessage: "Must be a valid day",
      },
    ],
    {
      successMessage: "looks good!",
    }
  )
  // for month
  .addField(
    document.querySelector('[aria-label="month"]'),
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "number",
        errorMessage: "Must be a valid month",
      },
      {
        rule: "minNumber",
        value: 1,
        errorMessage: "Must be a valid month",
      },
      {
        rule: "maxNumber",
        value: 12,
        errorMessage: "Must be a valid month",
      },
      {
        rule: "minLength",
        value: 1,
        errorMessage: "Must be a valid month",
      },
      {
        rule: "maxLength",
        value: 2,
        errorMessage: "Must be a valid month",
      },
    ],
    {
      successMessage: "looks good!",
    }
  )
  // for year
  .addField(
    document.querySelector('[aria-label="year"]'),
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "number",
        errorMessage: "Must be in the past",
      },
      {
        rule: "minNumber",
        value: 1970,
        errorMessage: "Must be in the past",
      },
      {
        rule: "maxNumber",
        value: 2023,
        errorMessage: "Must be in the past",
      },
      {
        rule: "minLength",
        value: 4,
        errorMessage: "Must be in the past",
      },
      {
        rule: "maxLength",
        value: 4,
        errorMessage: "Must be in the past",
      },
    ],
    {
      successMessage: "looks good!",
    }
  );
// Get elemen result
let resYear = document.querySelector('[aria-label="resultYear"]');
let resMonth = document.querySelector('[aria-label="resultMonth"]');
let resDay = document.querySelector('[aria-label="resultDay"]');

// Get input elemen
let inputDay = document.querySelector('[aria-label="day"]');
let inputMonth = document.querySelector('[aria-label="month"]');
let inputYear = document.querySelector('[aria-label="year"]');
const form = document.getElementById("form");
// form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get input value
  let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  // console.table(birthday);
  // convert to date
  let birthdayObj = new Date(birthday);
  // console.log(birthdayObj);
  // Date now - date birthday
  let ageDiffMill = Date.now() - birthdayObj;
  // convert to date new
  let ageDate = new Date(ageDiffMill);
  let ageYears = ageDate.getFullYear() - 1970;
  let ageMonth = ageDate.getMonth();
  let ageDay = ageDate.getDate() - 2;
  // inject to html
  resYear.textContent = ageYears;
  resMonth.textContent = ageMonth;
  resDay.textContent = ageDay;
});
