import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThankYou from "./components/ui/Thankyou";
import Main from "./main/Main";


function App() {
  return (
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/thankyou/:name" component={ThankYou} />
            </Switch>
          </Router>
  );
}

export default App;
