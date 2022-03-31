import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeSlider from './HomeSlider'

export default class HomeTopMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                        <HomeSlider/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
