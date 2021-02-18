import { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("/register");

  const changeURL = () => {
    if (url === "/") {
      setUrl("/register");
    } else {
      setUrl("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "b9623237-4ac1-48fc-b999-d0dc80b802c4",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Oops, incorrect credentials!");
    }
  };

  return (
    <div className="wrapper" style={{ paddingLeft: "250px" }}>
      <Router>
        <div className="form">
          <h1 style={{ textTransform: "uppercase" }} className="title">
            Log In
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "35px",
              color: "#BEBBBB",
              paddingTop: "60px",
            }}
            className="title"
          >
            {error}
          </h1>
        </div>
        <Link to={url}>
          <button className="button" onClick={changeURL}>
            <span>Register</span>
          </button>
        </Link>
        <Route path="/register" component={RegisterForm} />
      </Router>
    </div>
  );
};

export default LoginForm;
