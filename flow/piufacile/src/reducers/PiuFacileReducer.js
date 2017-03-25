import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'
import * as types from '../constants/ActionTypes'

export const piu_facile = function piu_facile( state = {}, action ) {
  switch ( action.type ) {
    case types.NOTHING:
      return Object.assign( {}, state, action.payload )
    default :
      return state
  }
}

const rootReducer = combineReducers( {
  piu_facile,
//  routing: routerReducer,
} )

export default rootReducer
