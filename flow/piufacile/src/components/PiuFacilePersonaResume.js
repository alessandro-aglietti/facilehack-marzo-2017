import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

export class PiuFacilePersonaResume extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h2>Persona resume</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>auto_detect: {this.props.persona.auto_detect}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>where: {this.props.persona.home_or_office}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>cap: {this.props.persona.cap}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>speedMbps: {this.props.persona.speedMbps}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>digital_value: {this.props.persona.digital_value}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>cost_commitment: {this.props.persona.cost_commitment}</h4>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => ({
  persona: state.persona
})

export default connect(
  mapStateToProps, {}
)( PiuFacilePersonaResume )

