import React, { useState } from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
// import Child from './child';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

function App() {
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  const [state, setState] = useState(999);
  const add = () => {
    setState(2000, () => {
      console.log('state已加，', state);
    });
  };
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        state:
        {state}
        {/* <Child /> */}
        <button type="button" onClick={add}>add</button>
      </header>
    </div>
  );
}

export default App;
