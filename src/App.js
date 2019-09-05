import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
// import ConnectedIntlProvider from "./commons/intl/ConnectedIntlProvider";
import store from "./store/store";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <ConnectedIntlProvider> */}
        <Header />
        <Routes />
        {/* </ConnectedIntlProvider> */}
      </Provider>
    );
  }
  componentWillUpdate(nextProps) {
    console.log(window.navigator.onLine);
  }
}

export default App;
