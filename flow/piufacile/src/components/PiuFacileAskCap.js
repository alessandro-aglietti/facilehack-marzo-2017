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
  update_persona,
} from '../actions/PiuFacileActions'

export class PiuFacileAskCap extends Component {

  constructor( props ) {
    super( props )
    this.state       = {}
    this.onCapChange = this.onCapChange.bind( this )
  }

  handleNext( to ) {
    return () => {
      console.log( "handleNext to " + to )
      this.props.nothing( { "what": to } )
      this.props.push( to )
    }
  }

  onCapChange( event ) {
    this.props.update_persona( {
      cap: event.target.value
    } )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>Ask CAP</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <input type={"text"} placeholder={"inserisci il CAP"} onChange={this.onCapChange}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button
              onClick={this.handleNext( types.TO_ASK_DIGITAL )}
            >
              Avvanti!!
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
)( PiuFacileAskCap )

