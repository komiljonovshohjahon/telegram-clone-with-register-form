import { useState } from "react";
import axios from "axios";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verification, setVerification] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [toogle, setToogle] = useState({});
  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (verification !== password) {
      setError("Passwords does not match!");
      setToogle({ borderColor: "red" });
    } else {
      try {
        await axios.post(
          "https://api.chatengine.io/users/",
          {
            username: username,
            secret: password,
            first_name: first_name,
            last_name: last_name,
          },
          { headers: { "PRIVATE-KEY": "36038e03-6686-4394-98c6-c58b0136eb88" } }
        );
        await axios.post(
          "https://api.chatengine.io/chats/5747/people/",
          { username: username },
          {
            headers: {
              "Project-ID": "b9623237-4ac1-48fc-b999-d0dc80b802c4",
              "User-Name": "jameskidd312",
              "User-Secret": "123123",
            },
          }
        );
        setSuccess("Please enter your information on Log In section!");
        setError("");
        setPassword("");
        setVerification("");
        setFirstname("");
        setUsername("");
        setLastname("");
        setToogle({ borderColor: "" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 style={{ textTransform: "uppercase" }} className="title">
          Register
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
            style={toogle}
            required
          />
          <input
            type="password"
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
            className="input"
            placeholder="Confirm password"
            style={toogle}
            required
          />
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
            className="input"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
            className="input"
            placeholder="Last Name"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Register</span>
            </button>
          </div>
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "25px",
              color: "#D6FF79",
              paddingTop: "25px",
            }}
            className="title"
          >
            {success}
          </h1>
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "25px",
              color: "#D6FF79",
              paddingTop: "25px",
            }}
            className="title"
          >
            {error}
          </h1>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
