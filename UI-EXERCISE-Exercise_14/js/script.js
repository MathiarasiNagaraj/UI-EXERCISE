let form = document.querySelector(".form");
// object for validation and pattern
let validation = {
  firstName: {
    required: "First Name is required",
    validation: "First Name is not valid",
    pattern: /^[A-Za-z]{1,30}$/,
  },
  lastName: {
    required: "Last Name is required",
    validation: "Last Name is not valid",
    pattern: /^[A-Za-z]{1,30}$/,
  },
  email: {
    required: "Email Address is required",
    validation: "Email Address is not valid",
    pattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  contactNumber: {
    required: "Contact Number is required",
    validation: "Contact Number is not valid",
    pattern: /^(0|91)?[6-9][0-9]{9}$/,
  },
  pinCode: {
    required: "PIN Code is required",
    validation: "PIN Code is not valid",
    pattern: /^[1-9][0-9]{5}$/,
  },
  cardNumber: {
    required: "Card Number is required",
    validation: "Card Number is not valid",
    pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
  },
  cardExpiry: {
    required: "Card Expiry is required",
    validation: "Card Expiry is not valid",
    pattern: /^(?:20(?:2[3-9]|[3-9][0-9])|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])$/,
  },
  cvv: {
    required: "CVV is required",
    validation: "CVV is not valid",
    pattern: /[0-9]{3,4}/,
  },
};
inputs = document.getElementsByTagName("input");
/***
 * @description
 * 
 *
 */
validate = (event) => {
    event.preventDefault();
    console.log(event);
    let errorMessages = document.querySelector(".error-message");
    Array.from(errorMessages).forEach(ele => ele.remove());

    errorMessages = document.querySelector(".invalid");
    Array.from(errorMessages).forEach(ele => ele.classList.remove("invalid"));
 

  for (let i of inputs) {
    if (i.value === "") {
      let error = document.createElement("p");
      error.innerText = validation[i.name].required;
      error.classList.add("error-message");
        i.classList.add("invalid");
      i.parentNode.append(error);
    }
    else if(!(validation[i.name].pattern.test(i.value)))
    {
      let error = document.createElement("p");
      error.innerText = validation[i.name].validation;
        error.classList.add("error-message");
        i.classList.add("invalid");
        i.parentNode.append(error);
    }
  }
};
form.addEventListener("submit", validate);
