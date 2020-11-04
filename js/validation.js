const name = document.getElementById("name");
const mobile = document.getElementById("mobile");
const age = document.getElementById("age");
const address = document.getElementById("address");
const country = document.getElementById("country");

// name & country should only contain letters
var nameToMatch = /^[A-Za-z'\- ]/;
// mobile should contain exactly 11 digits only
var mobileToMatch = /^[0-9]{11,}$/;

// PERSONAL INFORMATION
my_form.addEventListener("submit", (e) => {
  /**
   * validate the characters of the name and country field and check if the
   * field is empty
   */
  if (
    !nameToMatch.test(name.value) ||
    !nameToMatch.test(country.value) ||
    address.value === "" ||
    mobile.value === "" ||
    age.value === "" ||
    country.value === "" ||
    name.value === ""
  ) {
    alert("Invalid/Incomplete input!");
    return false;
  }

  /**
   * the mobile number field should only contain 11 digits
   */
  if (!mobileToMatch.test(mobile.value)) {
    alert("Invalid Contact Number! 11 digits only");
    return false;
  }

  /**
   * the check box should be checked before submitting the information
   */
  var agree = document.getElementById("agree");
  if (!agree.checked) {
    alert("You must agree that the information you input is true!");
    return false;
  }

  /**
   * the question should also contain an answer before submitting
   * otherwise it will not submit
   */
  var valid = false;
  var x = document.getElementsByName("surveyresponse");
  for (var i = 0; i < x.length; i++) {
    if (x[i].checked) {
      valid = true;
      break;
    }
  }

  if (valid) {
    alert("Thank you for answering the Contact Tracing Form");
  } else {
    alert("Please aswer the quick survey!");
    return false;
  }
});

// the fields will turn green if you click outside of the field
var form = document.getElementById("my_form");
form.addEventListener("blur", handleOnBlur, true);

function handleOnBlur() {
  name.style.backgroundColor = "#DFF0D8";
  mobile.style.backgroundColor = "#DFF0D8";
  age.style.backgroundColor = "#DFF0D8";
  address.style.backgroundColor = "#DFF0D8";
  country.style.backgroundColor = "#DFF0D8";
}
