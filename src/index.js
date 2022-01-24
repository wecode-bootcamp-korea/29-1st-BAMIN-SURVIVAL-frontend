import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/common.scss';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
