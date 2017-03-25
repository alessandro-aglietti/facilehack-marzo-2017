import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Provider } from 'react-redux'
import {store} from './store/PiuFacileStore'
import PiuFacile from './components/PiuFacile'

ReactDOM.render(
  <Provider store={store}>
    <PiuFacile />
  </Provider>,
  document.getElementById( 'root' )
);
