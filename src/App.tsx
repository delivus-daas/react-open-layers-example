import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import MapExample from "./examples/MapExample";
import CustomMapExample from "./examples/CustomMapExample";
import CustomMarkerExample from "./examples/CustomMarkerExample";
import ClusterExample from "./examples/ClusterExample";
import CustomPolygonExample from "./examples/CustomPolygonExample";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className={"row"}>
            <li>
              <Link to="/map">Map Example</Link>
            </li>
            <li>
              <Link to="/custom-map">Custom Map Example</Link>
            </li>
            <li>
              <Link to="/cluster">Cluster Example</Link>
            </li>
            <li>
              <Link to="/polygon">Polygon Example</Link>
            </li>
            <li>
              <Link to="/tooltip">Tooltip Example</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/map" component={MapExample} />
          <Route path="/custom-map" component={CustomMapExample} />
          <Route path="/cluster" component={ClusterExample} />
          <Route path="/polygon" component={CustomPolygonExample} />
          {/*<Route path="/custom-marker">*/}
          {/*  <CustomMarkerExample />*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
