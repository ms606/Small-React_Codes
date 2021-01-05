import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import GlobalStyles from './styles/globals';
import reportWebVitals from './reportWebVitals';

console.log(process);

const renderApp = () => {
  ReactDOM.render(
    <div>
      <GlobalStyles />
      <App />
    </div>,
    document.getElementById('root')
  );
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
