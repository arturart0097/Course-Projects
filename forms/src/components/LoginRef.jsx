import { useState } from "react";
import { useRef } from "react";

export default function LoginRef() {
  const email = useRef();
  const password = useRef();
  const [errorEmail, setErrorEmail] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailError = enteredEmail.includes("@");

    if (!emailError) {
      setErrorEmail(false);
      console.log("error");
      return;
    }

    setErrorEmail(true);

    console.log("Sending HTTP request...");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          {!errorEmail && (
            <p className="control-error">Please valied enter email</p>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
