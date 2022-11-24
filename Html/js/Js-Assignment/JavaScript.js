// var startNumber = 0;
document.getElementsByClassName("result").innerHTML = "output";

const element = document.getElementById("resultid");
// element.innerHTML = "New Heading";
// document.getElementById("resultid").innerHTML = "New Heading";

function addition() {
  var number1 = parseInt(prompt("Enter Number 1"));
  var number2 = parseInt(prompt("Enter Number 2"));
  output = number1 + number2;
  //document.write(number1 + number2);
  //   document.getElementById("resultid").innerHTML= "output";
  element.innerHTML = output;
}

// 2. Read in two numbers and display the larger number.
// 3. Read in two numbers and display them in ascending order.
// 4. Use a loop to display the numbers 0 through 5
function largNuber() {
  var number1 = parseInt(prompt("Enter Number 1"));
  var number2 = parseInt(prompt("Enter Number 2"));
  if (number1 > number2) {
    output = number1;
  } else {
    output = number2;
  }
  element.innerHTML = "Largest number is " + output;
}

function largNuber() {
  var number1 = parseInt(prompt("Enter Number 1"));
  var number2 = parseInt(prompt("Enter Number 2"));
  if (number1 > number2) {
    
      element.innerHTML =number2 +"<br> " + number1;
    } else {
       
        element.innerHTML =number1 +"<br> " + number2;
  }
}
