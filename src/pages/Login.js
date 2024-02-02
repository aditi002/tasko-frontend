import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    const user = {
      username,
      password,
    };

    await axios
      .post("http://localhost:3000/users/login", user)
      .then((res) => {
        localStorage.setItem("token", res["data"]["token"]);
        window.location.replace("/");
      })
      .catch((e) => {
        toast.error(`Login Failed! ${e["response"]["data"]["msg"]}`);
      });
  };
  return (
    <>
      <div className="container">
        <div className="login-form">
          <div className="login-title">Login</div>
          <div className="login-input-parts">
            <input
              className="login-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required="required"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required="required"
              value={password}
              onChange={handlePasswordChange}
            />

            <button className="login-input button" onClick={onSubmit}>
              Login
            </button>
          </div>
          <div className="login-signup">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
