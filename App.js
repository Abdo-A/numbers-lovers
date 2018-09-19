import { compose, applyMiddleware, createStore } from "redux";
import { NativeRouter, Switch, Route } from "react-router-native";
import { Provider } from "react-redux";
import React from "react";
import thunk from "redux-thunk";

import Main from "./src/pages/Main";
import Names from "./src/pages/Names";
import Output from "./src/pages/Output";
import reducer from "./src/store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/names" component={Names} />
            <Route exact path="/output" component={Output} />
          </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

export default App;
