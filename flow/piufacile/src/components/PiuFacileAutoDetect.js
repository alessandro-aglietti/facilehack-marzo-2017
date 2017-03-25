import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import * as types from '../constants/ActionTypes'

import {
  Grid,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import {
  nothing,
  auto_detect_location,
  auto_detect_speed,
  update_persona,
} from '../actions/PiuFacileActions'

export class PiuFacileAutoDetect extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  componentDidMount() {
    const thiss = this

    this.props.auto_detect_location().then( ( json ) => {
      console.log( "componentDidMount auto_detect_location then" )
      thiss.props.update_persona( {
        cap: thiss.props.auto_detect_location_data.address_components.reduce( ( accumulator, currentValue ) => {
          if ( currentValue.types.indexOf( "postal_code" ) !== -1 ) {
            return currentValue.long_name
          } else {
            return accumulator
          }
        } )
      } )
    } );

    this.props.auto_detect_speed().then( ( json ) => {
      console.log( "componentDidMount auto_detect_speed then" )
      thiss.props.update_persona( {
        speedMbps: thiss.props.auto_detect_speed_data.speedMbps
      } )
    } );

    this.props.update_persona( {
      auto_detect: 'si'
    } )
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
        { this.props.auto_detect_speed_data &&
        <Row>
          <Col xs={12} md={12}>
            <h4>{this.props.auto_detect_speed_data.speedMbps} Mbps</h4>
          </Col>
        </Row>
        }
        { this.props.auto_detect_speed_data && this.props.auto_detect_location_data &&
        <Button
          onClick={this.handleNext( types.TO_ASK_DIGITAL )}
        >
          Ok! Procedi!
        </Button>
        }
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => ({
  piu_facile               : state.piu_facile,
  auto_detect_location_data: state.auto_detect_location,
  auto_detect_speed_data   : state.auto_detect_speed,
})

export default connect(
  mapStateToProps, {
    nothing,
    auto_detect_location,
    auto_detect_speed,
    update_persona,
    push
  }
)( PiuFacileAutoDetect )

