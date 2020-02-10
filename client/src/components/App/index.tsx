import React from "react";
import "./App.css";
import Quiz from "../../pages/Quiz";
import Admin from "../../pages/Admin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/">Da Quizzzzz</Link>
        </header>
        <main className="App-main">
          <Switch>
            <Route exact path="/">
              <Quiz />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
