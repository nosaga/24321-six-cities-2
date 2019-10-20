import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';

const init = () => {
  ReactDOM.render(
      < App/>,
      document.querySelector(`#root`)
  );
};

init();

