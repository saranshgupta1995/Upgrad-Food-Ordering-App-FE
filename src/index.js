import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/restaurant/:id"
            render={props => {
              return <Details id={props.match.params.id}></Details>;
            }}
          ></Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(App(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
