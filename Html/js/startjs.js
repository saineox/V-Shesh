var var_name = {
  key: "Value",
  key: "Value",
};

// Key = It is also similar to variable name as it should be unique inside the object.
// value = Number string Boolean null undefine object array function.

var student_info = {
  id: 1,
  first_name: "pradeep",
  last_name: "kadam",
  email: "pradeeptraje@gmail.com",
};

console.log(student_info);
console.log();
// print perticuler value
console.log(student_info.email);
// insert value
student_info.id = 2;
student_info.last_name = "kadam_kadam";
console.log(student_info.id);
console.log(student_info.last_name);

/*
To Insert a new value to the Object
syntax
object_variable_name.newKey = newValue;
*/
student_info.contact_number = 92222222;
student_info.blood_group = "B +ve";

/*
To Edit/Update a value from Object
syntax
object_variable_name.key = newValue;
*/

student_info.last_name = "Magic";
student_info.email_id = "Logic@gmail.com";
console.log(student_info.first_name);
/*
To Detelte value from Object 
syntax 
delete object_variable_name.key;
*/
delete student_info.blood_group;

var list_of_array = [2, 1, 5, -7, 11];
var list_of_name = ["prk", "srk", "trk"];

var list_student_info = [
  { name: "prk", roll_number: "111", email: "prk@gmail.com" },
  { name: "srk", roll_number: "112", email: "srk@gmail.com" },
  { name: "trk", roll_number: "113", email: "trk@gmail.com" },
];

console.log(list_of_array);
console.log(list_of_name);
console.log(list_student_info);

console.log(list_student_info[2].email);
list_student_info.push({
  name: "end",
  roll_number: "114",
  email: "xyz@xml.com",
});
console.log(list_student_info);
list_student_info.unshift({
  name: "start",
  roll_number: "115",
  email: "xyz@xml.com",
});
console.log(list_student_info);
list_student_info[3] = {
  name: "updated",
  roll_number: "116",
  email: "new@xml.com",
};
console.log(list_student_info);
list_student_info[2].roll_number = 888;
console.log(list_student_info);
list_student_info.splice(1, 1);
console.log(list_student_info);

function printWelcomeMessage() {
  var message = "welcome to future!";
  alert(message);
}

function checkVoterAge() {
  var age = prompt("please enter Your age");
  if (age > 18) {
    alert("Eligble");
  } else {
    alert("Not eligible");
  }
}

function findAgeCategory() {
  var age = prompt("please enter your age");
  if (age < 18) {
    alert("The person is minor");
  } else if (18 <= age && age <= 60) {
    // if((18<=age) && (age<=60))
    alert("The person is upcoming sinor");
  } else {
    alert("sinor citizen");
  }
}

function checkEvenNumbrer() {
  var number = prompt("Enter Number till we need even number list");
  for (let count = 0; count <= number; count++) {
    if (count % 2 == 0) {
      console.log("even Number", count);
      document.write("<br> even Number = ", count);
    }
  }
}

function whileLoop() {
  var count2 = 0;
  while (count2 < 5) {
    document.write("<br> even Number = ", count2);
    count2 = count2 + 1;
  }
  let text = "";
  let i = 0;
  while (i < 10) {
    // text += "The number is " + i;
    // document.write("<br> even Number = ", i);
    i++;
  }
  // alert();
}

function findWeekday() {
  try {
    let day = prompt("please enter a number 0 - 6");
    // switch (day)
    switch (parseInt(day)) {
      case 1:
        alert("it's Day Monday");
        break;
      case 2:
        alert("it's Day Tuseday");
        break;
      case 3:
        alert("it's Day saturday");
        break;
      default:
        alert("It's Holiday ");
    }
  } catch (error) {
    document.write(error);
  }
}

class Authentication {
  loginPage() {
    alert("This is login page");
  }

  registerPage() {
    alert("This is register Page");
  }
}

var auth = new Authentication();

//auth.loginPage();

class Home extends Authentication {
  landingPage(){
    alert("This is landing page")
  }
}

var home = new Home();


