import React, { Component, Fragment } from 'react'
import  {Container, Row, Col, Button} from "react-bootstrap";
import MegaMenuMobile from '../home/MegaMenuMobile';

export default class NavMenuMobile extends Component {

  constructor() {
    super();
    this.state={
      SideNavState:"sideNavClose",
      ContentOverState:"ContentOverlayClose"
    }
  }

  MenuBarClickHandler=()=>{
    this.SideNavOpenClose();
  } 

  ContentOverlayClickHandler=()=>{
    this.SideNavOpenClose();
  }  

  SideNavOpenClose=()=>{
    let SideNavState= this.state.SideNavState;

    if(SideNavState==='sideNavOpen'){
      this.setState({
        SideNavState:'sideNavClose', 
        ContentOverState:'ContentOverlayClose'
      })
    }
    else{
      this.setState({
        SideNavState:'sideNavOpen', 
        ContentOverState:'ContentOverlayOpen'
      })
    }
  }


  render() {
    return (
      <Fragment>
        <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
          <Row>
            <Col className="px-3 py-1 d-flex justify-content-between" lg={12} md={12} sm={12} xs={12}>
              <Button onClick={this.MenuBarClickHandler} className="btn btn-light"><i className="fa fa-bars"></i></Button>
              <a href="" className="btn"> <img className="nav-logo" src="https://blueskytechmage.com/shopbuy/pub/full_screen_preview/images/logo.png"/></a>
              <div className="input-group w-100">
                  <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                  <button type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={this.state.SideNavState}>
          <div className='py-2'>
            <a className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></a>
            <a className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></a>
            <a className="h4 btn">LOGIN</a>
            <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Button>
          </div>
          
          <MegaMenuMobile/>
        </div>
        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

        </div>
      </Fragment>
    )
  }
}
