import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import {
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacileAutoDetect extends Component {

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
            <h1>Auto detect</h1>
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
)( PiuFacileAutoDetect )

