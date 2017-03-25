import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import rootReducer from '../reducers/PiuFacileReducer'

const initialState = {
  piu_facile: {
    "what": false
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( rootReducer, initialState, composeEnhancers(
  applyMiddleware(
  ) )
)
