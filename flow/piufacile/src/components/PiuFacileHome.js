import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import * as types from '../constants/ActionTypes'

import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacileHome extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  handleNext( to ) {
    return () => {
      console.log( "handleNext to " + to )
      this.props.nothing( { "what": to } )
      this.props.push( to )
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Casa</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3>Adesso sei collegato alla rete di casa?</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Button
              onClick={this.handleNext( types.TO_AUTO_DETECT )}
            >
              Si
            </Button>
          </Col>
          <Col xs={6} md={6}>
            <Button
              onClick={this.handleNext( types.TO_ASK_CAP )}
            >
              No
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
)( PiuFacileHome )

