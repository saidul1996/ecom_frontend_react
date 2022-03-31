import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <h5 className='text-center section-title'>COLLECTIONS</h5>
          <p className='text-center section-sub-title'>Some Of Our Exclusive Collection, You May Like</p>
          <Row>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://www.decornation.in/wp-content/uploads/2019/02/51dLLw7PNsL._SL1200_.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://rflbestbuy.com/images/detailed/69/997795.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://chairforce.com.au/wp-content/uploads/2020/10/wilma_angled_chairforce.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://ae01.alicdn.com/kf/HTB1Me1cSFXXXXaNXpXXq6xXFXXXR.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://gloimg.gbtcdn.com/soa/gb/item/6512379966293467136/15549/908d561b2340.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://cdn.shopify.com/s/files/1/0079/8117/0740/products/Product-ImagesArtboard-1_2048x.png' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://http2.mlstatic.com/D_NQ_NP_981161-MLM43785587959_102020-O.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col key={1} xl={3} lg={3} md={3} sm={4} xs={6} className='p-1'>
              <Card className='card'>
                <img src='https://www.cultfurniture.com/images/scandi-designs-dsw-kids-round-dining-table-peppermint-60cm-p3486-39179_zoom.jpg' alt='Product' />
                <Card.Body>
                <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
                <p className='product-price-on-card'>Price: 3888TK</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
