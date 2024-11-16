import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../userContext";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let auth = useContext(UserContext);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // To handle the response .send and .json error set response.status condition to handle the error
  const api = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let result;
    if (response.status >= 400) {
      result = await JSON.stringify(response);
      alert("user not found");
    } else {
      result = await response.json();
      auth.setUser(result);
      navigate("/Todos");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={api}>
        <input type="email" placeholder="email..." onChange={emailHandler} />
        <input
          type="text"
          placeholder="password..."
          onChange={passwordHandler}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
