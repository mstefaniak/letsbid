import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/main';
import MerchantsList from './components/MerchantsList';

import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's bid!</h2>
        </div>
        <div className="App-intro">
            <div className="App-content">
                <MerchantsList />
            </div>
        </div>
      </div>
  </Provider>
    );
  }
}

export default App;
