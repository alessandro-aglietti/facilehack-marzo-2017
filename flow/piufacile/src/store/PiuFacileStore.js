import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import rootReducer from '../reducers/PiuFacileReducer'

import { routerMiddleware } from 'react-router-redux'
import { hashHistory } from 'react-router'

import thunkMiddleware from 'redux-thunk'

const initialState = {
  piu_facile          : {
    "what": false
  },
  auto_detect_location: false,
  auto_detect_speed: false
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( rootReducer, initialState, composeEnhancers(
  applyMiddleware(
    routerMiddleware( hashHistory ),
    thunkMiddleware
  ) )
)
