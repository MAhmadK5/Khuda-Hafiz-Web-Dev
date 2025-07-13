
const display = document.getElementById("display");

function appendToDisplay(input){
 display.value += input;

}


function clearDisplay(){
display.value = "";

}

function Calculate(){
try{
display.value= eval(display.value);
}
    catch(error)
    {
        display.value= "Error";
    }

}
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const allowedKeys = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","/"];

  if (allowedKeys.includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    Calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});



