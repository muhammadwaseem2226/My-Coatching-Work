// alert("working");

const budgetForm = document.querySelector("#budget-form");
const budgetInput = document.querySelector("#budget-input");

const expenseForm = document.querySelector("#expense-form");
const expenseInput = document.querySelector("#expense-input");
const amountInput = document.querySelector("#amount-input");



const budgetAmount = document.querySelector("#budget-amount");
const expenseAmount = document.querySelector("#expense-amount");
const balanceAmount = document.querySelector("#balance-amount");
const balanceAmountInput = document.querySelector("#balanceAmount-input");
const budgetfeedback = document.querySelector(".budget-feedback");
const expensefeedback = document.querySelector(".expense-feedback");
const balance = document.querySelector("#balance");
const expenselist = document.querySelector("#expense-list");
// let newexpValue = document.querySelector("#expense-amount");

budgetForm.addEventListener("submit", budgetFormFunction);
expenseForm.addEventListener("submit", expenseFormFunction);
// expenseForm.addEventListener("click", function() {});
expenselist.addEventListener("click", function() {});
// document.addEventListener("DOMContentLoaded",getTaskFormLocalStorage);
// expenseamount.addEventListener("submit", expenseamountFormFunction);


function budgetFormFunction(event) {
  event.preventDefault();
  console.log(event, "Budget");
  const value = budgetInput.value;

  if (budgetInput.value == "") {
    alert("tast input fields is required")
    return;
  } else {
    budgetAmount.textContent = value;
    budgetInput.value = "";
    // showBalance();
    balanceAmountFunction();

  }
}

function balanceAmountFunction() {
  // event.preventDefault();
  console.log(budgetAmount, "Balance");
  let newBudgetValue = document.querySelector("#budget-amount").innerHTML;
  let newExpenValue = document.querySelector("#expense-amount").innerHTML;
  // let newBalanceValue = document.querySelector("#balance-amount").innerHTML;
  // let expenseAmount = document.querySelector("#expense-amount").innerHTML;

  let currentValue = newBudgetValue - newExpenValue;
  console.log(currentValue, "currentValue");

 
  
  let newBalanceValue = document.querySelector("#balance-amount");
  newBalanceValue.textContent = currentValue; 

 
}

function expenseFormFunction(event) {

  event.preventDefault();
  console.log(event, "Balance");
  const value = expenseInput.value;
 

  if (expenseInput.value == "") {
    alert("tast input fields is required")
    return;
  } else {
    expenseAmount.textContent = amountInput.value;  
    expenseInput.value = "";
   
    // showBalance();
    // expenseFormFunction();
   
    // let currentValue = newValue;
    // let newValue = document.querySelector("#expense-amount");
    // newValue.textContent = currentValue; 
    // console.log(expenseAmount, "currentValue");
    
    
    balanceAmountFunction();
  
  }
}








