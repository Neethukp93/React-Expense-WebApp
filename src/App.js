import { Route, Switch } from "react-router-dom";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
          <Expenses />
        </Route>
        <Route path="/new-expense" exact={true}>
          <NewExpense />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
