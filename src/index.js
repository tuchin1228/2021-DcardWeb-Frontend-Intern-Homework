import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import App from './App';
// import AAA from './aaa';
import All from './all';
import CityView from './cityView';
import Navbar from './Navbar';
import allReducers from './reducers/reducer';
import reportWebVitals from './reportWebVitals';
import './custom.scss';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="container d-flex py-4">
        <Navbar />
        <Switch>

          <Route path="/scenicSpot" exact component={All} />
          <Route path="/scenicSpot/:city" component={CityView} />
          {/* <Route path="/" component={App} /> */}

        </Switch>
      </div>

    </HashRouter>

  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
