import React from 'react';
import ReactDOM from 'react-dom';  // Use legacy import for React 17
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
