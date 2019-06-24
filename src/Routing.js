import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Overview from "./components/overview/Overview";
import Detail from "./components/detail/Detail";

const Routing = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cities" exact component={Overview} />
                <Route path="/cities/:id" exact component={Detail} />
            </Switch>
        </div>
    </Router>
);

export default Routing;
