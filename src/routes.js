import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import IndividualPlay from "./containers/IndividualPlay";
// import { Offline, Online } from "react-detect-offline";
// import TitleScreen from "./components/layouts/TitleScreen";
// import Toaster from "./components/UI/Toaster/Toaster";
import List from "./containers/List";
import Header from "./components/Header";
import Upload from "./containers/Upload"

// import RouteHandler from "./commons/RouteHandler";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route path="/title" component={TitleScreen} /> */}

          <Route exact path="/" component={List} />
          <Route exact path="/individualPlay/:id" component={IndividualPlay} />
          <Route exact path="/upload" component={Upload} />
          {/* <Route exact component={Header} /> */}
        </Switch>
      </HashRouter>
    );
  }
  componentWillMount() {
    //   <Offline>
    //   <Toaster condition="offline" />
    // </Offline>
    // <Online>
    //   <Toaster condition="online" />
    // </Online>
  }
}

export default Routes;
