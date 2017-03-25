import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Provider } from 'react-redux'
import { store } from './store/PiuFacileStore'
import PiuFacile from './components/PiuFacile'
import PiuFacileHomeOrOffice from './components/PiuFacileHomeOrOffice'

import { Router, Route, hashHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={PiuFacile}/>
        <Route path="/phase/home_or_office" component={PiuFacileHomeOrOffice}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
