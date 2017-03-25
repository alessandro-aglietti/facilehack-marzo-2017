import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
  Radio,
  FormGroup,
} from 'react-bootstrap';

import {
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacileAskDigital extends Component {

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
            <h1>Ask digital</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3>Quanto ti senti digitale?</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <FormGroup>
              <Radio inline>
                1
              </Radio>
              {' '}
              <Radio inline>
                2
              </Radio>
              {' '}
              <Radio inline>
                3
              </Radio>
            </FormGroup>
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
)( PiuFacileAskDigital )

