import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedExpenses, setLoadedExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2021");
  const history = useHistory();
  useEffect(() => {
    fetch("https://react-expense-app-7b6d3-default-rtdb.firebaseio.com/Expenses.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const expenses = [];
        for (const key in data) {
          const expense = {
            id: key,
            ...data[key],
          };
          expenses.push(expense);
        }
        setIsLoading(false);
        setLoadedExpenses(expenses);
        console.log(expenses);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = loadedExpenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  const addHandler = () => {
    history.replace("/new-expense");
  };

  return (
    <Card className="expenses">
      <button className="add-expense-btn" onClick={addHandler}>
        Add New Expense
      </button>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={new Date(expense.date)}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
