import "./style.css";
import { useState } from "react";

function ExpensesForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitle = (event) => {
    const etv = event.target.value;
    setTitle(etv);
  };
  const changeAmount = (event) => {
    const etv = event.target.value;
    setAmount(etv);
  };
  const changeDate = (event) => {
    const etv = event.target.value;
    setDate(etv);
  };
  const submitHangler = (event) => {
    const expenseData = {
      title: title,
      price: +amount,
      date: new Date(date),
    };
    event.preventDefault();
    props.onExpensesHangler(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const [show, setShow] = useState(false);

  const yes = () => {
    setShow(true);
  };
  const no = () => {
    setShow(false);
  };

  const showSubmit = (
    <div className="expense">
      <button onClick={yes}>Add Expense</button>
    </div>
  );

  return (
    <>
      {" "}
      {show ? (
        <form onSubmit={submitHangler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                maxLength={12}
                onChange={changeTitle}
                value={title}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min={0.01}
                step={0.01}
                onChange={changeAmount}
                value={amount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2020-09-01"
                max="2025-09-01"
                onChange={changeDate}
                value={date}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={no}>
              Cansel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        showSubmit
      )}
    </>
  );
}

export default ExpensesForm;
