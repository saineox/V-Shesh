import React from "react";

const LoginPage = () => {
  return(
    <div className="login">
      <div className="loginitem">
      <img src={require("../images/jz.jpg")} height="250vh" alt="Janat" />
      <img src="https://filmfare.wwmindia.com/content/2021/aug/youngest-bollywood-actress-sanjana-sanghi-51629879242.jpg" height="250vh" alt="Sushant"/>
      </div>
    <div className="space">
      <label className="align-label">Enter your Email ID</label>
      <input type="text" className="align-input" placeholder="Please enter email id" />
    </div>
    <div className="space">
      <label className="align-label">Enter your Password</label>
      <input type="password" className="align-input" placeholder="Please enter password" />
    </div>
    <div className="space">
      <button className="button">Login</button>
    </div>
  </div>
  )
}

export default LoginPage;