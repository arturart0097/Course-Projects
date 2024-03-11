import { useState } from "react";
import Input from "./UI/Input";

export default function StateLogin() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [didBlur, setDidBlur] = useState({
    email: false,
    password: false,
  });

  const emailError = didBlur.email && !inputValue.email.includes("@");
  const passwordError =
    didBlur.password && inputValue.password.trim().length < 8;

  const inputChange = (id, value) => {
    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));

    setDidBlur((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const blurHandler = (id) => {
    setDidBlur((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    console.log(inputValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => blurHandler("email")}
          onChange={(event) => inputChange("email", event.target.value)}
          value={inputValue.email}
          required
          error={emailError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => blurHandler("password")}
          onChange={(event) => inputChange("password", event.target.value)}
          value={inputValue.password}
          required
          error={passwordError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
