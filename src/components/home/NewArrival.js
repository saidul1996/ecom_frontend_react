import React, { Component, Fragment } from 'react'
import { Container, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class NewArrival extends Component {

  constructor(props) {
    super(props);
    this.next =  this.next.bind(this);
    this.previous =  this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Container fluid={true}>
        <h5 className='text-center section-title px-0 mx-0'>NEW ARRIVAL
          <a className='btn btn-sm mx-2 site-btn' onClick={this.previous}>
            <i className='fa fa-angle-left'></i>
          </a>
          <a className='btn btn-sm site-btn' onClick={this.next}>
            <i className='fa fa-angle-right'></i>
          </a>
        </h5>
        <p className='text-center section-sub-title'>Some Of Our Exclusive Collection, You May Like This Items</p>
        
        <Slider ref={c=>(this.slider=c)} {...settings}>
          <div>
            <Card className='card'>
              <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWUG2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1572391499434' alt='Product' />
              <Card.Body>
              <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
              <p className='product-price-on-card'>Price: 3888TK</p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='card'>
              <img src='https://mobileimages.lowes.com/productimages/83832cc4-a514-45b7-b894-4164bf8082b0/15753591.jpg?size=pdhi' alt='Product' />
              <Card.Body>
              <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
              <p className='product-price-on-card'>Price: 3888TK</p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='card'>
              <img src='https://5.imimg.com/data5/SH/GC/MY-8764775/mens-t-shirt-500x500.jpg' alt='Product' />
              <Card.Body>
              <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
              <p className='product-price-on-card'>Price: 3888TK</p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='card'>
              <img src='https://5.imimg.com/data5/XA/EJ/MY-1966796/bar-chairs-500x500.jpg' alt='Product' />
              <Card.Body>
              <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
              <p className='product-price-on-card'>Price: 3888TK</p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='card'>
              <img src='https://cdn.shopify.com/s/files/1/0476/5486/3016/products/pacsafe-viraloff-face-mask-6_1600x.jpg?v=1607976785' alt='Product' />
              <Card.Body>
              <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
              <p className='product-price-on-card'>Price: 3888TK</p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='card'>
              <img src='https://www.ikea.cn/cn/en/images/products/bergmund-bar-stool-with-backrest-black-gunnared-medium-grey__0878966_pe781764_s5.jpg' alt='Product' />
              <Card.Body>
              <p className='product-name-on-card'>ASUS TUF A15 FA586IU Ryzen 7 4888H GTX</p>
              <p className='product-price-on-card'>Price: 3888TK</p>
              </Card.Body>
            </Card>
          </div>
        </Slider>
        
      </Container>
    )
  }
}
