import React from "react";
// import App from "./Appx";

// import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <h1> Welcome to react </h1>
      <RegisterPage></RegisterPage>
     {/* <LoginPage></LoginPage> */}
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <h1>Hello, Welcome to Home Page</h1>
//     </div>
//   );
// }

export default App;
