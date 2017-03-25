import React, { Component } from 'react'

import * as types from '../constants/ActionTypes'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {
  nothing,
  update_persona
} from '../actions/PiuFacileActions'

export class PiuFacileHomeOrOffice extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  handleNext( to ) {
    const thiss = this
    return () => {
      console.log( "handleNext to " + to )
      thiss.props.update_persona( {
        home_or_office: to === types.TO_UFFICIO ? types.OFFICE : types.HOME
      } )
      thiss.props.nothing( { "what": to } )
      thiss.props.push( to )
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Home Or Office</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3>Cerchi un ADSL per casa o ufficio?</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Button
              onClick={this.handleNext( types.TO_HOME )}
            >
              Casa
            </Button>
          </Col>
          <Col xs={6} md={6}>
            <Button
              onClick={this.handleNext( types.TO_OFFICE )}
            >
              Ufficio
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
    update_persona,
    push
  }
)( PiuFacileHomeOrOffice )

