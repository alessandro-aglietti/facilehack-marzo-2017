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
  update_persona,
  nothing
} from '../actions/PiuFacileActions'

export class PiuFacileCostCommitment extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  handleNext( to, cost_commitment ) {
    const thiss = this
    return () => {
      console.log( "handleNext to " + to )
      thiss.props.update_persona( {
        cost_commitment
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
            <h1>Cost commitment</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3>Quanto vuoi spendere?</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <FormGroup>
              <Radio onClick={this.handleNext( types.TO_PERSONA_RESUME, '<20' )} name={"cost_commitment"} inline>
                &lt;20
              </Radio>
              {' '}
              <Radio onClick={this.handleNext( types.TO_PERSONA_RESUME, '<30' )} name={"cost_commitment"} inline>
                &lt;30
              </Radio>
              {' '}
              <Radio onClick={this.handleNext( types.TO_PERSONA_RESUME, '<40' )} name={"cost_commitment"} inline>
                &lt;40
              </Radio>
              <Radio onClick={this.handleNext( types.TO_PERSONA_RESUME, '>40' )} name={"cost_commitment"} inline>
                &gt;40
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
    update_persona,
    nothing,
    push
  }
)( PiuFacileCostCommitment )

