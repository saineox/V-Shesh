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
function largNumber() {
  var number1 = parseInt(prompt("Enter Number 1"));
  var number2 = parseInt(prompt("Enter Number 2"));
  if (number1 > number2) {
    output = number1;
  } else {
    output = number2;
  }
  element.innerHTML = "Largest number is " + output;
}

function ascendingNumber() {
  var number1 = parseInt(prompt("Enter Number 1"));
  var number2 = parseInt(prompt("Enter Number 2"));
  if (number1 > number2) {
    element.innerHTML = number2 + "<br> " + number1;
  } else {
    element.innerHTML = number1 + "<br> " + number2;
  }
}

//Print 1 to 5 woth loop
function oneToFive() {
  // alert("Amol is genious")
  var number1 = 0;
  for (var number = 1; number < 6; number++) {
    console.log("PrintlistOntofive", number);
    number1 = number1 + "<br>" + number;
  }
  element.innerHTML = number1;
}

//5. Use a loop to display the integers 9 through 0 in descending order.

function nineToZero() {
  // alert("Amol is genious")
  var number1 = 9;
  for (var number = 8; number > 0; number--) {
    console.log("PrintlistOntofive", number);
    number1 = number1 + "<br>" + number;
  }
  element.innerHTML = number1;
}

// 6. Use a loop to display the numbers in the range 0…20 that are multiples of 3.

function numberDivByThree() {
  var number1 = 0;
  for (var number = 0; number < 20; number++) {
    if (number % 3 == 0) {
      console.log("PrintlistOntofive", number);
      number1 = number1 + "<br>" + number;
    }
  }
  element.innerHTML = number1;
}

//7. Use a loop to display the numbers in the range 0…100 that are Prime Numbers.
function primeNumber() {
  var number1 = "Prime Numbers <br> ";
  for (var number = 0; number <= 100; number++) {
    if (number % 2 == 0) {
      console.log("PrintlistOntofive", number);
      number1 = number1 + " " + number;
    }
  }
  element.innerHTML = number1;
}

//Read a name and display it in reverse format (palindrome)

function numberPalindrome() {
  var string1 = prompt("Enter String For Palindrome");

  var result = "Palindrome";
  var stringLength = string1.length;

  // console.log(stringLength);
  // stringLength = Math.round(stringLength);
  console.log(stringLength);
  // var i;
  for (var i = 0; i <= stringLength / 2; i++) {
    var a = string1[i];
    var b = string1[stringLength - i];
    console.log(i);
    console.log(a);
    console.log(b);
    if (string1[i] !== string1[stringLength - i]) {
      // alert(string1[i]);
      result = "Not Palindrome";
      // console.log()
    }
  }

  // function checkPalindrome(string)
  // var string = prompt("Enter String For Palindrome");

  //   // find the length of a string
  //   const len = string.length;
  // console.log(len);
  //   // loop through half of the string
  //   for (let i = 0; i < len / 2; i++) {

  //       // check if first and last string are same
  //       if (string[i] !== string[len - 1 - i]) {
  //           return (alert('It is not a palindrome'));
  //       }
  //   }
  // return (alert('It is a palindrome'));

  element.innerHTML = string1 + " is " + result;
}

//9. Read a number and convert it from Celsius to Fahrenheit.

function celsiusToFahrenheit() {
  var tempreture = parseFloat(prompt("Enter Tempreture in Celsius"));
  var tempreture_fahrenheit = tempreture * 1.8 + tempreture;
  element.innerHTML =
    "Tempreture in Celsius" +
    tempreture +
    "<br> In fahrenheit" +
    tempreture_fahrenheit;
}

//10. Write a JavaScript program to display the current day and time on button click.

function dayTime() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  var DayTime_object = new Date();
  var day = DayTime_object.getDate();
  var day = DayTime_object.getDay();
  var weekday = days[day];
  // let weekday = days[day];
  var time = DayTime_object.getHours();
  element.innerHTML = "Todays day" + day + " " + weekday + "<br> Time " + time;
}







class human {
  eye() {
    console.log("2");
  }

  head() {
    alert(1);
  }

  haircolor() {
    alert("haircolor black");
  }

  legs() {
    console.log("Two legs");
  }
}

// let amol = new human();
// // let pradeep = new human();
// amol.eye();

// class pwd extends human
// {
//   legs()
//   {
//     console.log("work in progress");
//   }
// }

// let pradeep = new pwd();
// amol.legs();
// pradeep.legs();
