import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

const createBasicCreator = ( actionType ) => ( payload ) => ({
  type: actionType,
  payload
})

// this is a crappy implementation
const fetchData = ( actionType ) => ( payload ) => () => {
  return ( dispatch ) => {
    let fetch_options = {
      method: 'GET'
    }

    const uri = payload.uri

    return new Promise( ( resolve, reject ) => {
      fetch( uri, fetch_options )
        .then( response => {
          response.text()
            .then( ( text ) => {
              let json = false
              try {
                json = JSON.parse( text );
              } catch ( ex ) {
                reject( ex )
              }

              if ( response.status >= 200 && response.status < 300 ) {
                if ( payload.callback ) {
                  dispatch( payload.callback( {
                    data: json,
                    payload
                  } ) )
                }
                return json
              } else {
                reject( response.status )
              }
            } )
            .then( ( json ) => {
              resolve( json )
            } )
            .catch( ( ex ) => {
              reject( ex )
            } )
        } )
        .catch( ( ex ) => {
          reject( ex )
        } )
    } )
  }
}

export const nothing = createBasicCreator( types.NOTHING )
export const auto_detect_location_callback = createBasicCreator( types.AUTO_DETECT_LOCATION_CALLBACK )
export const auto_detect_location = (fetchData( types.AUTO_DETECT_LOCATION ))({
  uri: '/auto_detect_location.json',
  callback: auto_detect_location_callback
})

export const auto_detect_speed_callback = createBasicCreator( types.AUTO_DETECT_SPEED_CALLBACK )
export const auto_detect_speed = (fetchData( types.AUTO_DETECT_SPEED ))({
  uri: '/auto_detect_speed.json',
  callback: auto_detect_speed_callback
})