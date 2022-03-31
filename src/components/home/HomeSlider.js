import React, { Component } from 'react'
import Slider from "react-slick";

export default class HomeSlider extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
           <img className='slider-img' src='https://layerslider.com/wp-content/uploads/2019/11/ls-slider-181-slide-1.jpg' alt='Slider'/>
          </div>
          <div>
           <img className='slider-img' src='https://webvoltytemplate.com/Prestashop/PRS02/wt_ps_fashion_milena_207/modules/wtcmsslider/views/img/demo_img_1.jpg' alt='Slider'/>
          </div>
          <div>
           <img className='slider-img' src='https://i.pinimg.com/originals/cb/81/57/cb81571c9324e9da8f6f5e704cba27c8.jpg' alt='Slider'/>
          </div>
        </Slider>
      </div>
    )
  }
}
