import React from "react";
import axios from "axios";

const InboxPage = () => {
  const loadUsers = () => {
    let url = "https://reqres.in/api/users?page=2";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <h3> InboxPage </h3>
      <button onClick={() => loadUsers()}>Load List of Users</button>
    </div>
  );
};

export default InboxPage;
