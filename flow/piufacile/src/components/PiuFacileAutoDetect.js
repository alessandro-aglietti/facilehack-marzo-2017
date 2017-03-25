import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import {
  nothing,
  auto_detect_location,
} from '../actions/PiuFacileActions'

export class PiuFacileAutoDetect extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  componentDidMount() {
    this.props.auto_detect_location().then( ( json ) => {
      console.log( "componentDidMount auto_detect_location then" )
    } );
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
        { this.props.auto_detect_location_data &&
        <Row>
          <Col xs={12} md={12}>
            <h4>{this.props.auto_detect_location_data.formatted_address}</h4>
          </Col>
        </Row>
        }
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => ({
  piu_facile               : state.piu_facile,
  auto_detect_location_data: state.auto_detect_location,
})

export default connect(
  mapStateToProps, {
    nothing,
    auto_detect_location,
    push
  }
)( PiuFacileAutoDetect )

