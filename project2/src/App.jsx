import "./App.css";
import NewExpenses from "./components/FormExpeneses/NewExpenses";
import Expenses from "./components/ZalExpenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 10, 14),
  },
  { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const expensesApp = (expensesData) => {
    setExpenses((otherExpenses) => {
      return [expensesData, ...otherExpenses];
    });
  };

  return (
    <>
      <NewExpenses onExpensesApp={expensesApp} />
      <Expenses item={expenses} />
    </>
  );
}

export default App;
