import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const history = useHistory();
  const saveHandler = (formData) => {
    const expenseData = { ...formData, id: Date.now() };
    fetch("https://react-expense-app-7b6d3-default-rtdb.firebaseio.com/Expenses.json", {
      method: "POST",
      body: JSON.stringify(expenseData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={saveHandler} />
    </div>
  );
}

export default NewExpense;
