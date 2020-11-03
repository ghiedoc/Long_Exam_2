const name = document.getElementById("name");
const address = document.getElementById("address");
const state = document.getElementById("state");
const zip = document.getElementById("zip");

// PAYMENT
const credit_card = document.getElementById("credit_card");
const expiration = document.getElementById("expiration");
const cvv = document.getElementById("cvv");
const card_name = document.getElementById("card_name");

// name should only contain letters
var nameToMatch = /^[A-Za-z'\- ]/;
// zip code must only contain 4 digits
var zipCodeMatch = /^[0-9]{4}$/;

// PERSONAL INFORMATION
my_form.addEventListener("submit", (e) => {
  //   check if the field is empty
  if (name.value === "" || card_name === "") {
    alert("Name is required!");
    return false;
  }

  //   check if it match the input
  if (!nameToMatch.test(name.value) || !nameToMatch.test(card_name.value)) {
    alert("No digits allowed on Name Field!");
    return false;
  }

  //   check if the field is empty
  if (
    address.value === "" ||
    country.value === "" ||
    state.value === "" ||
    zip.value === ""
  ) {
    alert("Incomplete Fields!");
    return false;
  }

  //   check if it match the input
  if (!zipCodeMatch.test(zip.value)) {
    alert("Invalid Zip Code");
    return false;
  }
});

//PAYMENT INFORMATION

//   check if the button is selected or not
var card_form = document.getElementById("my_form");
card_form.addEventListener(
  "submit",
  function (event) {
    var card_array = document.getElementsByName("payment_method"),
      selection_made = false;
    for (var i = 0; i < card_array.length; i++) {
      if (card_array[i].checked) {
        selection_made = true;
        break;
      }
    }

    if (!selection_made) {
      event.preventDefault();
      alert("A Card must be selected!");
    }
  },
  false
);

// // onblur
// function blurFunction() {
//   // No focus = Changes the background color of input to red
//   document.getElementById("name").style.borderColor = "#EE7679";
// }
