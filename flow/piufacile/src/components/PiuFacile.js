import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import { Button } from 'react-bootstrap';

import {
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacile extends Component {

  constructor( props ) {
    super( props )
    this.state      = {}
    this.handleNext = this.handleNext.bind( this )
  }

  handleNext() {
    console.log( " Scegli la tua ADSL con +Facile!" )
    const path = `/phase/home_or_office`
    this.props.nothing( { "what": path } )
    this.props.push( path )
  }

  render() {
    return (
      <Button
        onClick={this.handleNext}
      >
        Scegli la tua ADSL con +Facile!
      </Button>
    )
  }
}

const mapStateToProps = ( state ) => ({
  piu_facile: state.piu_facile
})

export default connect(
  mapStateToProps, {
    nothing,
    push
  }
)( PiuFacile )

