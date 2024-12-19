window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const values  = { amount: 200000, years: 20, rate: 10 };
    const amountInput = document.getElementById("loan-amount");
    amountInput.value = values.amount;
    const yearInput = document.getElementById("loan-years");
    yearInput.value = values.years;
    const rateInput = document.getElementById("loan-rate");
    rateInput.value = values.rate;
    update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() { 
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const totalPayments = Math.floor(values.years * 12);
  return ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -totalPayments))).toFixed(2);
}
//checked that this was calculating correctly by using another calculator: https://www.calculator.net/loan-calculator.html 

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentSpan = document.getElementById('monthly-payment');
  monthlyPaymentSpan.innerText = '$' + monthly;
}
