import React from 'react';
import ReactDOM from 'react-dom';
import './app/assets/css/custom.css';
import MainApp from './app/main.component.js';
import { Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  timeout: 5000,
  position: 'center'
}

const App = () => (
  <Provider template={AlertTemplate} {...options}>
    <MainApp />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('content'));