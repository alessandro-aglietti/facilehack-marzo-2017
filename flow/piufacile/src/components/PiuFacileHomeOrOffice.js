import React, { Component } from 'react'

import { connect } from 'react-redux'

export class PiuFacileHomeOrOffice extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  render() {
    return (
      <h1>PiuFacileHomeOrOffice</h1>
    )
  }
}

const mapStateToProps = ( state ) => ({
  piu_facile: state.piu_facile
})

export default connect(
  mapStateToProps, {}
)( PiuFacileHomeOrOffice )

