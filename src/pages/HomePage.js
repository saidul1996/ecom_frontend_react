import React, { Component, Fragment } from 'react'
import Collection from '../components/home/Collection'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ExtraDiv from '../components/common/ExtraDiv'

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <div className='Desktop'>
            <NavMenuDesktop/>
            <ExtraDiv/>
            <HomeTop/>
          </div>

          <div className='Mobile'>
            <NavMenuMobile/>
            <ExtraDiv/>
            <HomeTopMobile/>
          </div>
          
          <FeaturedProducts/>
          <NewArrival/>
          <Collection/>
          <Categories/>
          <div className='Desktop'>
            <FooterDesktop/>
          </div>

          <div className='Mobile'>
            <FooterMobile/>
          </div>
          
          
      </Fragment>
    )
  }
}
