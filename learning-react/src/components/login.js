import React from "react";

const LoginPage = () => {
  let greetings = "Welcome to login page";
  let studenInfo = {
    id: 111,
    name: "Shaktiman",
    email: "gangadhar@vshesh.comm",
  };

  const onLogInAction = () => {
    alert(greetings);
  };

  const OnHandleInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="login">
      <div class="js_output">
        <h2> {greetings}</h2>
        <p> Id : {studenInfo.id} </p>
        <p> Name : {studenInfo.name} </p>
        <p> Email : {studenInfo.email} </p>
      </div>

      <div className="loginitem">
        <img src={require("../images/jz.jpg")} height="250vh" alt="Janat" />
        <img
          src="https://filmfare.wwmindia.com/content/2021/aug/youngest-bollywood-actress-sanjana-sanghi-51629879242.jpg"
          height="250vh"
          alt="Sushant"
        />
      </div>
      <div className="space">
        <label className="align-label">Enter your Email ID</label>
        <input
          type="text"
          className="align-input"
          placeholder="Please enter email id"
          onChange={OnHandleInput}
        />
      </div>
      <div className="space">
        <label className="align-label">Enter your Password</label>
        <input
          type="password"
          className="align-input"
          placeholder="Please enter password"
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
