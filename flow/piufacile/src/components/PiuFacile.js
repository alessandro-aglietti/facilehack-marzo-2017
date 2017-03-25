import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacile extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
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
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Landing ADSL</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button
              onClick={this.handleNext}
            >
              Confronta le offerte!
            </Button>
          </Col>
        </Row>
      </Grid>
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

