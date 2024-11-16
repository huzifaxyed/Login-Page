import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let navigate = useNavigate();
  
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    api();
    navigate("/Login");
  };
  const api = async () => {
    let response = await fetch("http://localhost:1000/create/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    let result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={emailHandler} />
        <input type="password" onChange={passwordHandler} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Signup;
