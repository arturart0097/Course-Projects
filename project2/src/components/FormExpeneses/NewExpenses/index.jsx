import ExpensesForm from "../ExpensesForm";
import "./style.css";
import { useId } from "react";

function NewExpenses(props) {
  const id = useId();

  const onNewExpenses = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: id,
    };
    props.onExpensesApp(expensesData);
  };

  return (
    <div className="new-expense">
      <ExpensesForm onExpensesHangler={onNewExpenses} />
    </div>
  );
}
export default NewExpenses;
