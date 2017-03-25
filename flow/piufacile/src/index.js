import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Provider } from 'react-redux'
import { store } from './store/PiuFacileStore'
import PiuFacile from './components/PiuFacile'
import PiuFacileHomeOrOffice from './components/PiuFacileHomeOrOffice'
import PiuFacileHome from './components/PiuFacileHome'
import PiuFacileOffice from './components/PiuFacileOffice'
import PiuFacileAutoDetect from './components/PiuFacileAutoDetect'
import PiuFacileAskCap from './components/PiuFacileAskCap'
import PiuFacileAskDigital from './components/PiuFacileAskDigital'

import { Router, Route, hashHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={PiuFacile}/>
        <Route path="/phase/home_or_office" component={PiuFacileHomeOrOffice}/>
        <Route path="/phase/casa" component={PiuFacileHome}/>
        <Route path="/phase/office" component={PiuFacileOffice}/>
        <Route path="/phase/auto_detect" component={PiuFacileAutoDetect}/>
        <Route path="/phase/ask_cap" component={PiuFacileAskCap}/>
        <Route path="/phase/ask_digital" component={PiuFacileAskDigital}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
