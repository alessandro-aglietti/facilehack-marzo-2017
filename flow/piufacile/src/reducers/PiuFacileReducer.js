import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as types from '../constants/ActionTypes'

export const piu_facile = function piu_facile( state = {}, action ) {
  switch ( action.type ) {
    case types.NOTHING:
      return Object.assign( {}, state, action.payload )
    default :
      return state
  }
}

export const auto_detect_location = function piu_facile( state = {}, action ) {
  switch ( action.type ) {
    case types.AUTO_DETECT_LOCATION_CALLBACK:
      return Object.assign( {}, state, action.payload.data.results[0] )
    default :
      return state
  }
}

export const auto_detect_speed = function piu_facile( state = {}, action ) {
  switch ( action.type ) {
    case types.AUTO_DETECT_SPEED_CALLBACK:
      return Object.assign( {}, state, action.payload.data )
    default :
      return state
  }
}

const rootReducer = combineReducers( {
  piu_facile,
  auto_detect_location,
  auto_detect_speed,
  routing: routerReducer,
} )

export default rootReducer
