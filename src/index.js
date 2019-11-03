import React from 'react';
import ReactDOM from 'react-dom';
import offers from './mocks/offers';
import App from './app/app.jsx';

const init = () => {
  const settings = {
    card: offers,
  };

  ReactDOM.render(
      < App cards={settings.card}/>,
      document.querySelector(`#root`)
  );
};

init();

