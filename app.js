// Grab elements
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const tipButtons = document.querySelectorAll(".tip-button");
const customTipInput = document.querySelector(".custom-input");
const tipAmountDisplay = document.querySelector("#tip-amount");
const totalDisplay = document.querySelector("#total");
const billErrorMessageDisplay = document.querySelector('#error-message-bill');
const peopleErrorMessageDisplay = document.querySelector('#error-message-people');
const resetButton = document.querySelector(".reset");

let selectedTipPercentage = 0;

// Event listeners
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);
customTipInput.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetValues);
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleTipSelection(e.target);
  });
});
billInput.addEventListener('input', validateBill);
peopleInput.addEventListener('input', validatePeople);
billInput.addEventListener('input', () => {
  resetButton.disabled = billInput.value.trim() === ''; // Toggle button state
});
resetButton.addEventListener('click', () => {
  billInput.value = ''; // Reset input field
  resetButton.disabled = true; // Disable reset button
});



// INPUT VALIDATION
function validateBill() {
  const billValue = parseFloat(billInput.value);
  if (isNaN(billValue) || billValue <= 0) {
    billErrorMessageDisplay.textContent = "Can't be zero";
    billInput.classList.add("error-border"); // Add red border
    return false;
  } else {
    billErrorMessageDisplay.textContent = ""; // Clear error if valid
    billInput.classList.remove("error-border"); // Remove red border
    return true;
  }
}

function validatePeople() {
  const peopleValue = parseInt(peopleInput.value);
  if (isNaN(peopleValue) || peopleValue <= 0) {
    peopleErrorMessageDisplay.textContent = "Can't be zero";
    peopleInput.classList.add("error-border"); // Add red border
    return false;
  } else {
    peopleErrorMessageDisplay.textContent = ""; // Clear error if valid
    peopleInput.classList.remove("error-border"); // Remove red border
    return true;
  }
}

// TIP SELECTION 
function handleTipSelection(button) {
  // Remove active class from previously selected button
  tipButtons.forEach((btn) => btn.classList.remove("active"));

  // Add active class to the clicked button
  button.classList.add("active");

  // Update selected tip percentage
  selectedTipPercentage = parseFloat(button.textContent) / 100;

  // Recalculate the tip
  calculateTip();
}

// CALCULATIONS
function calculateTip() {
  const isValidBill = validateBill();
  const isValidPeople = validatePeople();

  const billValue = parseFloat(billInput.value);
  const peopleValue = parseInt(peopleInput.value);
  let tipPercentage;

  
  if (!isValidBill || !isValidPeople) {
    tipAmountDisplay.textContent = `$0.00`;
    totalDisplay.textContent = `$0.00`;
    return; // Exit if either validation fails
  }

  function formatNumber(value) {
    if (value > 10000) {
      return value.toExponential(2); // Display two decimal places in exponential form
    }
    return value.toFixed(2); // Standard format with two decimal places
  }

  // Handle custom tip or button selection
  if (customTipInput.value) {
    tipPercentage = parseFloat(customTipInput.value) / 100;
    tipButtons.forEach((btn) => btn.classList.remove("active"));
  } else {
    tipPercentage = selectedTipPercentage;
  }

  // Perform the tip and total calculation
  const tipAmount = (billValue * tipPercentage) / peopleValue;
  const totalAmount = (billValue + billValue * tipPercentage) / peopleValue;

  // Display the calculated values
  tipAmountDisplay.textContent = `$${formatNumber(tipAmount)}`;
  totalDisplay.textContent = `$${formatNumber(totalAmount)}`;
}


// RESET FUCTIONALITY
function resetValues() {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipAmountDisplay.textContent = "$0.00";
  totalDisplay.textContent = "$0.00";
  selectedTipPercentage = 0;
  billErrorMessageDisplay.textContent ='';
  billInput.classList.remove("error-border");
  peopleErrorMessageDisplay.textContent = '';
  peopleInput.classList.remove("error-border");
  tipButtons.forEach((button) => button.classList.remove("active"));
}
