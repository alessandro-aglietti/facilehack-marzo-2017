import React, { Component } from 'react'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import * as types from '../constants/ActionTypes'

import {
  Grid,
  Row,
  Col,
  Radio,
  FormGroup,
} from 'react-bootstrap';

import {
  nothing,
  update_persona,
} from '../actions/PiuFacileActions'

export class PiuFacileAskDigital extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  handleNext( to, digital_value ) {
    const thiss = this
    return () => {
      console.log( "handleNext too " + to )
      thiss.props.update_persona( {
        digital_value
      } )
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
              <Radio onClick={this.handleNext( types.TO_COST_COMMITMENT, 1 )} name={"ask_digital"} inline>
                1
              </Radio>
              {' '}
              <Radio onClick={this.handleNext( types.TO_COST_COMMITMENT, 2 )} name={"ask_digital"} inline>
                2
              </Radio>
              {' '}
              <Radio onClick={this.handleNext( types.TO_COST_COMMITMENT, 3 )} name={"ask_digital"} inline>
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
    update_persona,
    push
  }
)( PiuFacileAskDigital )

