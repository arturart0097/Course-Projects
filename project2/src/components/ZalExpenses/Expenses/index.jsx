import ExpensesItem from "../ExpensesItem";
import "./style.css";
import Card from "../../UI/Card";
import ExpensesFilter from "../../ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "../ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const item = props.item;
  const expensesFilterArr = item.filter(
    (el) => el.date.getFullYear().toString() === filterYear
  );

  const arrExpenses = expensesFilterArr.map((el) => (
    <ExpensesItem
      key={el.id}
      title={el.title}
      price={el.price}
      date={el.date}
    />
  ));

  const notExpenses =
    arrExpenses < 1 ? (
      <h2 className="expenses-list__fallback">Not found Expenses.</h2>
    ) : (
      arrExpenses
    );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesFilterArr} />
        <ul className="expenses-list">{notExpenses}</ul>
      </Card>
    </li>
  );
}

export default Expenses;
