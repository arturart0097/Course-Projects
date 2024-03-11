import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [didBlur, setDidBlur] = useState(false);

  const emailError = email.includes("@");

  const emailChange = (event) => {
    setEmail(event.target.value);

    if (emailError) {
      setDidBlur(true);
    }
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    const data = {
      email: email,
      password: password,
    };
    event.preventDefault();
    if (didBlur === true) {
      console.log(data);
    } else {
      console.log("Error sending HTTP request!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={emailChange}
            value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={passwordChange}
            value={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
