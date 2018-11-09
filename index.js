const calculator = document.querySelector('.calculator')
const screen = document.getElementById('screen')
const keys = calculator.querySelector('.calculator-keys')
const clear = document.getElementById("all-clear")

let screenValue, firstValue, secondValue, operator, result;

keys.addEventListener('click', e => {
    
 if (e.target.matches('button') && e.target.className != "operator" && e.target.id != "equal") {
        screenValue = screen.value += event.target.value;
 }
 
 if(e.target.className == "operator") {
       operator = e.target.value;
       firstValue = screenValue;
       screen.value = ""
   }
    
  if(e.target.id == "equal") {
      
       secondValue = screenValue;
       
       screen.value = "";
       
       if (operator == "+") {
           result = parseFloat(firstValue) + parseFloat(secondValue);
       } else if (operator == "-") {
           result = parseFloat(firstValue) - parseFloat(secondValue);
       } else if (operator == "*") {
           result = parseFloat(firstValue) * parseFloat(secondValue);
       } else if(operator == "/") {
           result = parseFloat(firstValue) / parseFloat(secondValue);
       }
       
       screen.value = result;
       screenValue = result;
   }
 
})

clear.addEventListener('click', e => {
   if(e.target.id == "all-clear") {
       screen.value = "";
   }
})
 