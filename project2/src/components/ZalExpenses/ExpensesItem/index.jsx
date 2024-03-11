import ExpensesDate from "../ExpensesDate";
import "./style.css";
import Card from "../../UI/Card";

function ExpensesItem(props) {
  const price = props.price;
  const date = props.date;
  const title = props.title;

  return (
    <Card className="expense-item">
      <ExpensesDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${price}</div>
    </Card>
  );
}

export default ExpensesItem;
