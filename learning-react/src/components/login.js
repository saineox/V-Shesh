// import React from "react";

import React, { useState } from "react";

const LoginPage = () => {

  
  
  let greetings = "Welcome to login page";
  var studentInfo = {
    id: 111,
    name: "Shaktiman",
    email: "gangadhar@vshesh.com",
  };
  
  const onLogInAction = () => {
    alert(greetings);
  };
  
  const [formValue, setFormValue] = useState({
    email_id: " ",
    password: " ",
  });

  const OnHandleInput = (event) => {
    // console.log(event.target.value);
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
    console.log(formValue);
  };

  return (
    <div className="login">
      <div class="js_output">
        <h2> {greetings}</h2>
        <p> Id : {studentInfo.id}  Name : {studentInfo.name} </p>
        <p> Email : {studentInfo.email} </p>
        <p> Email : {formValue.email_id} </p>
        <h3>
          The student name is {studentInfo.email}, and he is{" "}
          {studentInfo.email_id} years old
        </h3>
        {/* <h1>
          Your email id is {formValue.email_id} and password{" "}
          {formValue.password}
        </h1> */}
      </div>

      <div className="loginitem">
        <img src={require("../images/jz.jpg")} height="200vh" alt="Janat" />
        <img
          src="https://filmfare.wwmindia.com/content/2021/aug/youngest-bollywood-actress-sanjana-sanghi-51629879242.jpg"
          height="200vh"
          alt="Sushant"
        />
      </div>
      <div className="space">
        <label className="align-label">Enter your Email ID</label>
        <input
          type="text"
          className="align-input"
          placeholder="Please enter email id"
          onChange={OnHandleInput} name="email_id"
          />
          <i class="fa-solid fa-eyes"></i>
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input
          type="password"
          className="align-input"
          placeholder="Please enter password"
          onChange={OnHandleInput} name="password"
        />
      </div>
      <div className="space">
        <button className="button">Login</button>
        <button className="button" onClick={() => onLogInAction()}>
          onclickAction
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
