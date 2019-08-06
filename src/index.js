

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import test from './store'

let store = createStore(test)

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
      return <div>Loading...</div>
  }
  else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
      return null;
  }
};

//pages
const Index = Loadable({
  loader: () => import('./pages/index/index'),
  loading: MyLoadingComponent,
});
const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: MyLoadingComponent
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={ Index } exact></Route>
          <Route path="/about" component={ Home }/>
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


