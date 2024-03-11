import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import { FormControl } from "../../UI/StyledUI.js";

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue < 1) {
      setIsInvalid(true);
    } else {
      onAddGoal(enteredValue);
      setEnteredValue("");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl $invalid={!isInvalid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
