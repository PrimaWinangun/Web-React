import React from 'react';
import ReactDOM from 'react-dom';
import './app/assets/css/custom.css';
import MainApp from './app/main.component.js';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <MainApp />
)

ReactDOM.render(<App />, document.getElementById('content'));
registerServiceWorker();