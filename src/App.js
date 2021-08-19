import React from "react";
import "./App.css";
import { useReducer, useMemo } from "react";
import Home from "./screens/Home";
import Budget from "./screens/Budget";
import Category from "./screens/Category";
import Character from "./screens/Character";
import NotFound from "./screens/NotFound";
import Result from "./screens/Result";
import { ROUTE_NAMES } from "./constants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GiftFinderContext, reducer, initialState } from "./store";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <GiftFinderContext.Provider value={contextValue}>
      <Router>
        <div className="Main-div">
          <div className="Main-border-div">
            <Switch>
              <Route exact path={ROUTE_NAMES.HOME}>
                <Home />
              </Route>
              <Route exact path={ROUTE_NAMES.BUDGET}>
                <Budget />
              </Route>
              <Route exact path={ROUTE_NAMES.CATEGORY}>
                <Category />
              </Route>
              <Route exact path={ROUTE_NAMES.CHARACTER}>
                <Character />
              </Route>
              <Route exact path={ROUTE_NAMES.RESULT}>
                <Result />
              </Route>
              <Route exact path={ROUTE_NAMES.NOT_FOUND}>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GiftFinderContext.Provider>
  );
}

export default App;
