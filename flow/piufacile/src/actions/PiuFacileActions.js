import * as types from '../constants/ActionTypes'

const createBasicCreator = ( actionType ) => ( payload ) => ({
  type: actionType,
  payload
})

export const nothing = createBasicCreator( types.NOTHING )