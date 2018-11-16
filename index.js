const calculator = document.querySelector('.calculator')
const screen = document.getElementById('screen')
const keys = calculator.querySelector('.calculator-keys')
const clear = document.getElementById("all-clear")

let screenValue, firstValue, secondValue, operator, result;

keys.addEventListener('click', event => {
    
 if (event.target.matches('button') && event.target.id != "equal") {
        screenValue = screen.value += event.target.value;
 }
    
  if(event.target.id == "equal") {
       
      result = eval(screenValue);
      screen.value = result;
      screenValue = result;
    
   }
 
})

clear.addEventListener('click', event => {
   if(event.target.id == "all-clear") {
       screen.value = "";
   }
})
 