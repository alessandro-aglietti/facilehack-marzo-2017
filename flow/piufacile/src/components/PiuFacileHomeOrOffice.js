import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export class PiuFacileHomeOrOffice extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} md={12}>
            <h1>Piu Facile Home Or Office</h1>
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
  mapStateToProps, {}
)( PiuFacileHomeOrOffice )

