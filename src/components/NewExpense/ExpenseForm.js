import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleHandler = (event) => {
    setInput((prevstate) => {
      return { ...prevstate, title: event.target.value };
    });
  };

  const amountHandler = (event) => {
    setInput((prevstate) => {
      return { ...prevstate, amount: event.target.value };
    });
  };

  const dateHandler = (event) => {
    setInput((prevstate) => {
      return { ...prevstate, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    input.date = new Date(input.date);
    props.onSaveForm(input);
    setInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={input.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={input.amount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" value={input.date} onChange={dateHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
