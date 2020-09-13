import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataLayer } from './DataLayer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState reducer>
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
