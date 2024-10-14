import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

// const Login = () => {
//   const [username, setusername] = useState(" ");
//   const [password, setpassword] = useState(" ");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // check if username and password are valid
//     if (username === "admin" && password === "123") {
//       alert("Login Successful");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };
// };
