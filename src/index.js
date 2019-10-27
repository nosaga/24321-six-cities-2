import React from 'react';
import ReactDOM from 'react-dom';
import cardName from './apartment/apartment.mock';
import App from './app/app.jsx';

const init = () => {
  const settings = {
    apartmentTitle: cardName
  };
  ReactDOM.render(
      < App title={settings.apartmentTitle}/>,
      document.querySelector(`#root`)
  );
};

init();

