import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // React warning: findDOMNode is deprecated in StrictMode and not sure how to fix it another way.
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root'),
);
